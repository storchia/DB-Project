const express = require('express');
const membercontroller = require('../controllers/membercontroller');

const router = express.Router();

// router.param('id', membercontroller.checkID)

router
  .route('/top-5-cheap')
  .get(membercontroller.aliasToptours, membercontroller.getAllTours);

router.route('/tour-stats').get(membercontroller.getTourStats);
router.route('/monthly-plan/:year').get(membercontroller.getMonthlyPlan);

router
  .route('/')
  .get(membercontroller.getAllTours)
  .post(membercontroller.createTour);

router
  .route('/:id')
  .get(membercontroller.getTour)
  .patch(membercontroller.updateTour)
  .delete(membercontroller.deleteTour);

module.exports = router;
