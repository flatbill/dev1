// exports.handler =  function () {
//     console.log('running function getEnvVars.js')
//     let supaUrl =  process.env.supaUrl
//     console.log('supaUrl is ' = supaUrl)
//     return supaUrl
// }

  exports.handler = (event, context) => { 
    console.log('9 running netlify function getEnvVars') 
    return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': 'http://localhost:4200/'},
    body: 'wingoo' //JSON.stringify(ret)
    }

}
