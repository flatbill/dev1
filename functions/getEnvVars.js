exports.handler = async function () {
    let supaUrl = 'wingo' //process.env.supaUrl
    log.console('running function getEnvVars.js')
    log.console('supaUrl is ' = supaUrl)
    return {
      statusCode: 200,
      body: JSON.stringify('wingoMoo')
    }
  }
  //body: JSON.stringify({ message: `supaUrl is ${supaUrl}.` })
