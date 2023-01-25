import { createClient } from '@supabase/supabase-js' 
exports.handler = async (event, context, callback) => {
  console.log('running Netlify lambda function: readSupabase')
  const supaUrl = process.env.supaUrl
  const supaAnonKey = process.env.supaAnonKey
  console.log('we reached line 6 readSupabase.js')
  console.log(typeof supaUrl )
  console.log(typeof supaAnonKey )
  console.log('we reached line 9 readSupabase.js')
  const supabaseClient = createClient(supaUrl,supaAnonKey)
  console.log('11 supabaseClient type:')
  console.log(typeof supabaseClient)
  const myObj1 = {firstName: "Billy", age: 63, city: "Ocala"}
  const genericResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(myObj1)
  }
  console.log('we reached line 19 readSupabase.js')
  const { data } = await supabaseClient.from('guitars').select().match({ id: 1 })
  console.log(typeof data)
  console.table(data)
  fun7()
  supaResponse = {
    statusCode: 201,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(data)
  }
  console.log('we reached the end of Supabase.js')
  // return genericResponse
  return supaResponse
}

function fun7(){
  console.log('running fun7')
}
  ////////////////////////////////////////
