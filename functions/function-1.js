const {helloWorld} = require('./utils')

exports.handler = async (event) => {
  helloWorld()
  console.log('we ran helloWorld function.  joy.')  
}
