//const {helloWorld} = require('./utils')
const {anotherFunc} = require('./utils')
exports.handler = async (event) => {
  //helloWorld()
  anotherFunc()
  console.log('we ran helloWorld function.  joy.')  
}
