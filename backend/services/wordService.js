const { Word } = require('../models');

class WordService {
  static async createWord(data) {
    const { english_word, french_word } = data;
    const wordExists = await this.checkWordExists(french_word);
    if (wordExists) {
      throw new Error('cette pair de mots existe déjà');
    }

    const word = await Word.create({
      english_word,
      french_word,
    });

    return word;
  }

  static async checkWordExists(french_word) {
    const word = await Word.findOne({ where: { french_word } });
    return word !== null;
  }

  static async getAllWords() {
    return Word.findAll();
  }

  static async getWordById(id) {
    const word = await Word.findByPk(id);
    if (!word) {
      throw new Error('Mot non trouvé');
    }
    return word;
  }

  static async updateWord(id, data) {
    const word = await Word.findByPk(id);
    if (!word) {
      throw new Error('Mot non trouvé');
    }

    const { english_word, french_word } = data;

    await word.update({
      english_word,
      french_word,
    });

    return word;
  }

  static async deleteWord(id) {
    const word = await Word.findByPk(id);
    if (!word) {
      throw new Error('Mot non trouvé');
    }

    await word.destroy();s
    return word;
  }
  static async getRandomWord() {
    const maxId = await Word.max('id');
    if (!maxId) {
      throw new Error('No words available');
    }

    let randomId;
    let word;
    while (!word) {
      randomId = Math.floor(Math.random() * maxId) + 1;
      word = await Word.findByPk(randomId);
    }

    return word;
  }

  static async checkAnswer(wordId, answer, language) {
    const word = await Word.findByPk(wordId);
    if (!word) {
      throw new Error('Mot non trouvé');
    }
    if (language === 'french') {
      return word.english_word.toLowerCase() === answer.toLowerCase();
    } else {
      return word.french_word.toLowerCase() === answer.toLowerCase();
    }
  }
}

module.exports = WordService;
