exports.handler = async function (event, context) {
    const value = process.env.supaUrl
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of supaUrl is ${value}.` })
    }
  }
  
