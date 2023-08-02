const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const AutoGeneratePlugin = (schema) => {
  schema.add({ _id: { type: String } });
  schema.add({ createdAt: { type: String, index: true } });
  schema.add({ date: { type: String, index: true } });
  schema.add({ updatedAt: { type: String, index: true } });

  schema.pre('save', function (next) {
    const model = this.collection.modelName
    if (this.isNew) {
      this._id = uuidv4();
      if (model === 'Stock') {
        this.date = moment().toISOString();
      } else {
        this.createdAt = moment().toISOString();
      }
    }
    this.updatedAt = moment().toISOString();
    next();
  });
};

module.exports = AutoGeneratePlugin;