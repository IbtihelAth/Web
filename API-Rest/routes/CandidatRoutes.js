const express = require('express');
 
const CandidatRoute = express.Router();
let Candidat = require('../model/candidat');
 
// Add Candidat
CandidatRoute.route('/add-candidat').post((req, res, next) => {
    Candidat.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all candidats
CandidatRoute.route('/get-allCandidat').get((req, res) => {
    Candidat.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get One
CandidatRoute.route('/read-candidat/:id').get((req, res) => {
    Candidat.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 

 
module.exports = CandidatRoute;