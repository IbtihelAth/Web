const express = require('express');
 
const TestRoute = express.Router();
let Test = require('../model/test');
 
// Add test
TestRoute.route('/add-test').post((req, res, next) => {
    Test.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all 
TestRoute.route('/get-allTest').get((req, res) => {
    Test.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get One
TestRoute.route('/read-test/:id').get((req, res) => {
    Test.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update 
TestRoute.route('/update-test/:id').put((req, res, next) => {
    Test.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Test updated successfully!')
    }
  })
})
 
// Delete 
TestRoute.route('/delete-tst/:id').delete((req, res, next) => {
    Test.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = TestRoute;