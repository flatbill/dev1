// exports.handler =  function () {
//     console.log('running function getEnvVars.js')
//     let supaUrl =  process.env.supaUrl
//     console.log('supaUrl is ' = supaUrl)
//     return supaUrl
// }

const { request } = require("http")

  exports.handler = (event, context) => { 
    console.log('9 running netlify function getEnvVars') 
    console.log(request.arguments)
    return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': 'localhost:4200'},
    body: 'wingoo' //JSON.stringify(ret)
    }

}
