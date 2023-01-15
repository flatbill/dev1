// exports.handler =  function () {
//     console.log('running function getEnvVars.js')
//     let supaUrl =  process.env.supaUrl
//     console.log('supaUrl is ' = supaUrl)
//     return supaUrl
// }


  exports.handler = (event, context) => { 
    console.log('10a running netlify function getEnvVars') 
    console.log( process.env.supaUrl )

    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: 'wingoo' //JSON.stringify(ret)
    }

}
