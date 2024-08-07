module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('Word', {
      english_word: {
        type: DataTypes.STRING,
        allowNull: false
      },
      french_word: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
    });
    return Word;
  };
  