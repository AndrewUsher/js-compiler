const codeGenerator = require('./codeGenerator')
const transformer = require('./transformer')
const parser = require('./parser')
const tokenizer = require('./tokenizer')

const compiler = input => codeGenerator(transformer(parser(tokenizer(input))))

module.exports = compiler
