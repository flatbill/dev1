exports.handler = async function () {
    let supaUrl = process.env.supaUrl
    log.console('running function getEnvVars.js')
    log.console('supaUrl is ' = supaUrl)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `supaUrl is ${supaUrl}.` })
    }
  }
  
