const homeRoute = require('express').Router();

homeRoute.get('/', (req, res) => res.json('HOME!'));

module.exports = homeRoute;
