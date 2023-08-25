const {Router} = require('express');
const {protect} = require('../middlewares/auth-middleware');
const {getActivities} = require('../controllers/activity-controller');

const activityRouter = Router();

activityRouter.get('/', protect, getActivities);

module.exports = activityRouter;
