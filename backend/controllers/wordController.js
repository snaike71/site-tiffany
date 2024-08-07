const WordService = require('../services/wordService');

class WordController {
  static async createWord(req, res) {
    try {
      const word = await WordService.createWord(req.body);
      res.status(201).json(word);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllWords(req, res) {
    try {
      const words = await WordService.getAllWords();
      res.status(200).json(words);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getWordById(req, res) {
    try {
      const word = await WordService.getWordById(req.params.id);
      res.status(200).json(word);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async updateWord(req, res) {
    try {
      const word = await WordService.updateWord(req.params.id, req.body);
      res.status(200).json(word);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async deleteWord(req, res) {
    try {
      await WordService.deleteWord(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  static async getRandomWord(req, res) {
    try {
      const word = await WordService.getRandomWord();
      res.status(200).json(word);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async checkAnswer(req, res) {
    try {
      const { wordId, answer, language } = req.body;
      const isCorrect = await WordService.checkAnswer(wordId, answer, language);
      res.status(200).json({ isCorrect });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = WordController;
