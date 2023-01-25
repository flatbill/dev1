import { createClient } from '@supabase/supabase-js' 
exports.handler = async (event, context, callback) => {
  console.log('running Netlify lambda function: readUsers2')
  const supaUrl = process.env.supaUrl
  const supaAnonKey = process.env.supaAnonKey
  console.log('we reached line 6 readUser2.js')
  console.log(typeof supaUrl )
  console.log(typeof supaAnonKey )
  console.log('we reached line 9 readUser2.js')
  const supabaseClient = createClient(supaUrl,supaAnonKey)
  console.log(typeof supabaseClient)
  const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
  const genericResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(myObj1)
  }
  // console.log(typeof supabase)
  console.log('we reached line 18 readUser2.js')

  return genericResponse
}
  ////////////////////////////////////////
