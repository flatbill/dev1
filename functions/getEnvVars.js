exports.handler =  function () {
    console.log('running function getEnvVars.js')
    let supaUrl =  process.env.supaUrl
    console.log('supaUrl is ' = supaUrl)
    return supaUrl
}
