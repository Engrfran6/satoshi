const Activity = require('../models/Activities/ActivityModel');

exports.getActivities = async (req, res) => {
  try {
    const userId = req.user._id;
    const activities = await Activity.findOne({user: userId});

    return res.status(201).json({
      status: 'success',
      data: activities,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
