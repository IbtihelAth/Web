const express = require('express');
 
const CycleRoute = express.Router();
let Cycle = require('../model/cycle');
 
// Add new cycle
CycleRoute.route('/add-cycle').post((req, res, next) => {
    Cycle.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all cycle
CycleRoute.route('/get-allCycle').get((req, res) => {
    Cycle.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get One
CycleRoute.route('/read-cycle/:id').get((req, res) => {
    Cycle.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update cycle
CycleRoute.route('/update-cycle/:id').put((req, res, next) => {
    Cycle.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Cycle updated successfully!')
    }
  })
})
 
// Delete Cycle
CycleRoute.route('/delete-cycle/:id').delete((req, res, next) => {
    Cycle.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = CycleRoute;