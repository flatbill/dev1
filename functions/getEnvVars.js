exports.handler = async function () {
    console.log('running function getEnvVars.js')
    let supaUrl = await process.env.supaUrl
    console.log('supaUrl is ' = supaUrl)
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({ message: `supaUrl is ${supaUrl}.` })
    return {}
}
  

