import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
exports.handler = async (event, context, callback) => {
  console.log('running Netlify lambda function: readSupabase')
  // const supaUrl = process.env.supaUrl
  // const supaAnonKey = process.env.supaAnonKey
  // console.log('we reached line 6 readSupabase.js')
  // console.log(typeof supaUrl)
  // console.log(typeof supaAnonKey)
  console.log('we reached line 12 readSupabase.js')
  
  console.log('11 supabaseClient type:')
  console.log(typeof supabaseClient)
  const myObj1 = {nickName: "Fang", age: 63, city: "Ocala"}
  const genericResponse = {
    statusCode: 222,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(myObj1)
  }
  console.log('we reached line 22 readSupabase.js')
  console.log(Date.now())
  
  // const {data}  = await supabaseClient.from('guitars').select().match({ id: 1 })
  return await supabaseClient.from('guitars').select().match({ id: 1 })
  .then ((response) => {
    return callback(null, {statusCode : '200', body: JSON.stringify(response)})
    // console.log('date now is: ', Date.now())
    // console.log(typeof data)
    // console.table(data)
    // console.log(data)
    // } 
  }
  

  // console.log(Object.getOwnPropertyNames(data[0]))
  // console.log(Object.keys(data[0]))
  // fun7()
  // supaResponse = {
  //   statusCode: 200,
  //   headers: {'Access-Control-Allow-Origin': '*'},
  //   body: JSON.stringify(data)
  // }
  // body: JSON.stringify(data)

  // console.log(Date.now())
  // console.log('we reached the end of Supabase.js')
  // return genericResponse
  // return supaResponse
}

function fun7(){
  console.log('running fun7')
  console.log(Date.now())
}
  ////////////////////////////////////////
