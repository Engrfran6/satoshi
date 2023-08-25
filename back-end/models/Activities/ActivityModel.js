const {Schema, model} = require('mongoose');
const AutoGeneratePlugin = require('../schema_plugins');

const activitySchema = new Schema(
  {
    title: {
      type: String,
    },
    user: {
      type: Schema.Types.String,
      ref: 'User',
    },
  },
  {versionKey: false}
);

activitySchema.plugin(AutoGeneratePlugin);

const Activity = model('Activity', activitySchema);
module.exports = Activity;
