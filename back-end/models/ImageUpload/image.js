const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const imageSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['success', 'failed'],
      default: 'success',
    },

    photo: {
      type: String,
    },

    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
  },
  {versionKey: false}
);

imageSchema.plugin(AutoGeneratePlugin);

const Image = model('Image', imageSchema);
module.exports = Image;
