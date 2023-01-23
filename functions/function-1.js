const {helloWorld} = require('./utils')

exports.handler = async (event) => {
  helloWorld()
  console.log('we ran helloWorld function')
  return {
		statusCode: 200,
		body: 'Hello Worldie.'
	}
}
