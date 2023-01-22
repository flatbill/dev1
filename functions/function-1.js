const {helloWorld} = require('./utils')

exports.handler = async (event) => {
  helloWorld()
  return {
		statusCode: 200,
		body: 'Hello Worldie.',
	}
}
