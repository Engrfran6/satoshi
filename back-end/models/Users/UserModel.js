const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AutoGeneratePlugin = require('../schema_plugins');

const userSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['verified', 'pending'],
      default: 'pending',
    },
    email: {
      type: String,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
      required: [true, 'Please Add Email'],
    },
    password: {
      type: String,
    },
    fullName: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    referalId: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
      optional: true,
    },
    resetPasswordExpire: {
      type: Date,
      optional: true,
    },
    verifyEmailToken: {
      type: String,
      optional: true,
    },
    profilePhoto: {
      type: String,
      optional: true,
    },
    kyc: {
      type: [String],
    },
    // balance: {type: Schema.Types.ObjectId, ref: 'Account'},
    balance: {
      type: Number,
      default: 0.0,
    },
    lockedBalance: {
      type: Number,
      default: 0.0,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {versionKey: false}
);

userSchema.pre('save', async (next) => {
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

userSchema.plugin(AutoGeneratePlugin);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getSignedJwtToken = function (expires) {
  const JWT_SECRET = process.env.JWT_SECRET;
  return jwt.sign({email: this.email}, JWT_SECRET, {
    expiresIn: expires ? expires : process.env.JWT_EXPIRE,
  });
};

userSchema.statics.retrieve = function (data) {
  return this.find(data.query)
    .sort(data.sort ? (data.sort === 'desc' ? {createdAt: -1} : {createdAt: 1}) : {createdAt: -1})
    .limit(parseInt(data.limit, 10) || 10)
    .skip(parseInt(data.page, 10) || 0);
};

userSchema.statics.retrievePaginated = async function (data) {
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

const User = model('User', userSchema);
module.exports = User;

// // ==========================ADMIN =======================================================

// // Admin Schema (similar to user schema)
// const adminSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     default: 'admin',
//   },
// });

// adminSchema.pre(
//   'save',
//   async function (next) {
//     const admin = this;
//     if (!admin.isModified('password')) return next();

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(admin.password, salt);
//     admin.password = hash;
//     next();
//   },
//   {versionKey: false}
// );

// adminSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const Admin = model('Admin', userSchema);
// module.exports = Admin;
