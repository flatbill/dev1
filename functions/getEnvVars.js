// exports.handler =  function () {
//     console.log('running function getEnvVars.js')
//     let supaUrl =  process.env.supaUrl
//     console.log('supaUrl is ' = supaUrl)
//     return supaUrl
// }


  exports.handler = async (event, context) => { 
    console.log('10a running netlify function getEnvVars') 
    console.log( process.env.supaUrl )
    let supaUrl =  process.env.supaUrl 
    return {
      statusCode: 200,
      body: "Hello, Worldy"
    }
    // return {
    //   statusCode: 200,
    //   headers: {'Access-Control-Allow-Origin': '*'},
    //   body: supaUrl //JSON.stringify(ret)
    // }

}
