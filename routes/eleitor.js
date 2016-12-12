/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Eleitor = require('../models/Eleitor.js');

// GET /eleitor (listar eleitores)
router.get('/', function (req, res, next) {
    Eleitor.find(function(err, eleitor) {
        if (err) return next(err);
        res.json(eleitor);
    });
});

// POST /eleitor (cadastrar eleitor)
    Eleitor.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;


