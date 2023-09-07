const Activity = require('../models/Activities/ActivityModel');

exports.getActivities = async (req, res) => {
  try {
    const userId = req.user._id;
    const activities = await Activity.find({user: userId});

    return res.status(200).json({
      status: 'success',
      data: activities,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

exports.deleteActivities = async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedActivities = await Activity.findByIdAndDelete(userId);

    if (!deletedActivities) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Activities account deleted successfully',
      deletedActivities: deletedActivities,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Activities account',
      error: error.message,
    });
  }
};
