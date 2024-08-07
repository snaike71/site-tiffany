// routes/wordRoutes.js
const express = require('express');
const WordController = require('../controllers/wordController');

const router = express.Router();

router.post('/create', WordController.createWord);
router.get('/list', WordController.getAllWords);
router.get('/list/:id', WordController.getWordById);
router.put('/:id', WordController.updateWord);
router.delete('/:id', WordController.deleteWord);
router.get('/random', WordController.getRandomWord);
router.post('/check', WordController.checkAnswer);
module.exports = router;
