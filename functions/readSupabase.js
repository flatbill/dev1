// // import { createClient } from '@supabase/supabase-js' 
// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}

// // const supabaseClient = createClient(supaUrl,supaAnonKey)

// exports.handler = (event, context, callback) => { 
//   console.log('running supabase lambda function')
//   console.log(supaUrl.length)
//   console.log(supaAnonKey.length)

//   callback(null, { 
//     statusCode: 201, 
//     headers: {'Access-Control-Allow-Origin': '*'},
//     body: "Hello Worldy" 
//   })  } 
////////////////////////////////////////////////////////////////////////////////////////////
import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
////
////
exports.handler = async (event, context) => {
  console.log('running Netlify lambda function: readSupabase')
  console.log(typeof supaUrl )
  console.log(typeof supaAnonKey )
  console.log('we reached line 27 readSupabase')
  const qsParms = event.queryStringParameters
  console.table(qsParms)
  const tableName  = qsParms.tableName   || 'myDefaultTableName'
  const tableField = qsParms.tableField  || 'myDefaultTableField'
  const lookupVal  = qsParms.lookupVal   || 'myDefaultLookupVal'
  const maxRows    = qsParms.maxRows     || 'myDefaultMaxRows'
  // console.log(tableName)
  // console.log(tableField)
  // console.log(lookupVal)
  // console.log(maxRows)
  console.log('40 supabaseClient type:')
  console.log(typeof supabaseClient)
  // const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
  // const genericResponse = {
  //   statusCode: 202,
  //   headers: {'Access-Control-Allow-Origin': '*'},
  //   body: JSON.stringify(myObj1)
  // }
  console.log('we reached line 36 readSupabase')
  // const { data } = await supabaseClient.from('guitars').select().match({ id: 1 })
  // const { data } = await supabaseClient.from('guitars').select().eq('make', 'Martin')
  const { data } = await supabaseClient
  .from(tableName).select().eq(tableField, lookupVal)
  console.log(typeof data)
  console.table(data)  // only appears when the field name is 'data'. blaming supabase.
  console.log(data[0].make)  //this works, so data must be an array?
  console.log('we reached line 55 readSupabase')

  // let supabaseData = new Object
  supabaseData = data
  console.table(supabaseData)
  // console.table(Object.keys(supabaseData))
  console.log('we reached line 47 readSupabase')
  // console.table(event.data)
  // console.table(event.body)
  // console.log('we reached line 44 readSupabase')

  // const something = event.data  // this is input to this lamda, i think
  // return { statusCode: 208, body: JSON.stringify(something) }
  const myResponse = {
    statusCode: 205,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: supabaseData
  }
  console.log('we reached line 58 readSupabase')

  return myResponse  //this duznt work?

  // body: JSON.stringify(supabaseData)

  //return genericResponse // duznt do anything?  lambda has automatic return at the end?
  // but only if you are using it with a callback?

} // end export.handler =>
  ////////////////////////////////////////


// import { createClient } from '@supabase/supabase-js' 
// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const supabaseClient = createClient(supaUrl,supaAnonKey)
// exports.handler =  (event, context) => {
//   console.log('running Netlify lambda function: readSupabase')
//   // const supaUrl = process.env.supaUrl
//   // const supaAnonKey = process.env.supaAnonKey
//   // console.log('we reached line 6 readSupabase.js')
//   // console.log(typeof supaUrl)
//   // console.log(typeof supaAnonKey)
//   console.log('we reached line 12 readSupabase.js')
  
//   console.log('11 supabaseClient type:')
//   console.log(typeof supabaseClient)
//   const myObj1 = {nickName: "Fang", age: 63, city: "Ocala"}
//   const genericResponse = {
//     statusCode: 222,
//     headers: {'Access-Control-Allow-Origin': '*'},
//     body: JSON.stringify(myObj1)
//   }
//   console.log('we reached line 22 readSupabase.js')
//   console.log(Date.now())
  
//   const {data}  = await supabaseClient.from('guitars').select().match({ id: 1 })
//    supabaseClient.from('guitars').select().match({ id: 1 })
//   //.then ((response) => {
    
//       { statusCode : '206', 
//         headers: {'Access-Control-Allow-Origin': '*'},
//         body: JSON.stringify({ data: 'foo'})
     
//     // console.log('date now is: ', Date.now())
//     // console.log(typeof data)
//     // console.table(data)
//     // console.log(data)
//     // } 
//  // }
  
///////////////////////////////////////////////////////////////////////////
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
//}

// function fun7(){
//   console.log('running fun7')
//   console.log(Date.now())
// }
  ////////////////////////////////////////

  
