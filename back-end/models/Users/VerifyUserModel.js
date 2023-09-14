const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AutoGeneratePlugin = require('../schema_plugins');

const verifyUserSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['verified', 'pending'],
      default: 'verified',
    },

    fullName: {
      type: String,
    },
    occupation: {
      type: String,
    },
    incomeSource: {
      type: String,
    },
    annualIncome: {
      type: String,
    },
    dob: {
      type: Date,
    },
    maritalStatus: {
      type: String,
    },
    addresLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
      optional: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    nationality: {
      type: String,
    },
    zipcode: {
      type: String,
      default: 0.0,
    },
    dlFront: {
      type: String,
      default: 0.0,
    },
    dlBack: {
      type: String,
    },
    passport: {
      type: String,
    },

    selfie: {
      type: String,
    },
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
  },
  {versionKey: false}
);

verifyUserSchema.pre('save', async (next) => {
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

verifyUserSchema.plugin(AutoGeneratePlugin);

verifyUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

verifyUserSchema.methods.getSignedJwtToken = function (expires) {
  const JWT_SECRET = process.env.JWT_SECRET;
  return jwt.sign({email: this.email}, JWT_SECRET, {
    expiresIn: expires ? expires : process.env.JWT_EXPIRE,
  });
};

verifyUserSchema.statics.retrieve = function (data) {
  return this.find(data.query)
    .sort(data.sort ? (data.sort === 'desc' ? {createdAt: -1} : {createdAt: 1}) : {createdAt: -1})
    .limit(parseInt(data.limit, 10) || 10)
    .skip(parseInt(data.page, 10) || 0);
};

verifyUserSchema.statics.retrievePaginated = async function (data) {
  const page = parseInt(data.page, 10) || 0;
  const limit = parseInt(data.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await this.countDocuments(data.query);

  data.page = page * limit;

  const results = await this.retrieve(data);

  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
    };
  }

  return {
    docs: results,
    totalDocs: total,
    count: results.length,
    page: page || 0,
    limit,
    prevPage: pagination.prev?.page || null,
    nextPage: pagination.next?.page || null,
  };
};

const VerifyUser = model('VerifiedUser', verifyUserSchema);
module.exports = VerifyUser;
