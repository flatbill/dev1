const {helloWorld} = require('./utils')

exports.handler = async (event) => {
  helloWorld()
  anotherFunc()
  console.log('we ran helloWorld function.  joy.')  
}
