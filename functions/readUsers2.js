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
  console.log('11 supabaseClient type:')
  console.log(typeof supabaseClient)
  const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
  const genericResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(myObj1)
  }
  console.log('we reached line 19 readUser2.js')
  const { data } = await supabaseClient.from('guitars').select().match({ id: 1 })
  console.log(typeof data)
  console.table(data)
  console.log('we reached line 23 readUser2.js')
  return genericResponse
}
  ////////////////////////////////////////
