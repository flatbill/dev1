// import { createClient } from '@supabase/supabase-js' 
// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const supabaseClient = createClient(supaUrl,supaAnonKey)

exports.handler = (event, context, callback) => { callback(null, { statusCode: 200, body: "Hello, World 👋🏻🇨🇴" }); };
////////////////////////////////////////////////////////////////////////////////////////////

// exports.handler = async (event, context, callback) => {
//   console.log('running Netlify lambda function: readUsers2')

//   console.log('we reached line 6 readUser2.js')
//   console.log(typeof supaUrl )
//   console.log(typeof supaAnonKey )
//   console.log('we reached line 9 readUser2.js')
//   console.log('11 supabaseClient type:')
//   console.log(typeof supabaseClient)
//   const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
//   const genericResponse = {
//     statusCode: 207,
//     headers: {'Access-Control-Allow-Origin': '*'},
//     body: JSON.stringify(myObj1)
//   }
//   console.log('we reached line 19 readUser2.js')
//   const { data } = await supabaseClient.from('guitars').select().match({ id: 1 })
//   console.log(typeof data)
//   console.table(data)
  
//   console.log('we reached line 23 readUser2.js')

//   const result = event.data
//   return { statusCode: 208, body: JSON.stringify(data) }

  //return genericResponse // duznt do anything?  lambda has automatic return at the end?
// }
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

  
