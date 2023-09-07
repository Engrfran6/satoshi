const {Schema, model} = require('mongoose');

const AutoGeneratePlugin = require('../schema_plugins');

const packageSchema = new Schema(
  {
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    dailyRoi: {
      type: Number,
    },
    profitRate: {
      type: Number,
    },
    lossRate: {
      type: Number,
    },
    dailyLoss: {
      type: Number,
    },
    referalBonus: {
      type: Number,
    },
    minDeposit: {
      type: Number,
    },
    maxDeposit: {
      type: Number,
    },
    totalPercentageReturn: {
      type: Number,
    },
    duration: {
      type: String,
    },
  },
  {versionKey: false}
);

// Add auto generate plugin for auto Id, createdAt and updatedAt
packageSchema.plugin(AutoGeneratePlugin);

packageSchema.statics.retrieve = function (data) {
  return this.find(data.query)
    .sort(data.sort ? (data.sort === 'desc' ? {createdAt: -1} : {createdAt: 1}) : {createdAt: -1})
    .limit(parseInt(data.limit, 10) || 10)
    .skip(parseInt(data.page, 10) || 0);
};

packageSchema.statics.retrievePaginated = async function (data) {
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

const Package = model('Package', packageSchema);
module.exports = Package;
