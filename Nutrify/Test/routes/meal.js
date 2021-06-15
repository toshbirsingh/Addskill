const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/nutrify/create',
    auth.authenticate,
    controller.createMealController);

router.post('/nutrify/update',
    auth.authenticate,
    controller.updateMealController);

router.delete('/nutrify/delete',
    auth.authenticate,
    controller.deleteMealController);

router.get('/nutrify/read',
    auth.authenticate,
    controller.readMealController);