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

const User = model('User', userSchema);
module.exports = User;
