const {helloWorld} = require('./utils')

exports.handler = async (event) => {
  helloWorld()
}
