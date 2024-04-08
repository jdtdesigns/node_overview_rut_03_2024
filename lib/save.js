const fs = require('fs')

function save(answerObj) {
  fs.writeFileSync('./data.json', JSON.stringify(answerObj, null, 2))
}

module.exports = save