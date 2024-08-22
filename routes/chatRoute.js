const express = require('express');
const { createChat, findChat } = require('../controllers/chatController');

const router = express.Router();

router.post('/', createChat);
router.get('/find/:firstId/:secondId', findChat);

module.exports = router;
    