// exports.handler =  function () {
//     console.log('running function getEnvVars.js')
//     let supaUrl =  process.env.supaUrl
//     console.log('supaUrl is ' = supaUrl)
//     return supaUrl
// }


  exports.handler =  (event, context) => { 
    console.log('10a running netlify function getEnvVars') 
    console.log( process.env.supaUrl )
    let supaUrl =  process.env.supaUrl 
    return {
      statusCode: 201,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ x: 5, y: 6 })
    }
    

}
