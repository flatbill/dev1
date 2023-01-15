exports.handler = async function () {
    console.log('running function getEnvVars.js')
    let supaUrl = await process.env.supaUrl
    console.log('supaUrl is ' = supaUrl)
    return supaUrl
}
