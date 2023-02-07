import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('26 running Netlify lambda function: readSupabase')
  console.log(typeof supaUrl )
  console.log(typeof supaAnonKey )
  console.log('we reached line 29 readSupabase')
  const qsParms = event.queryStringParameters
  console.table(qsParms)
  let tbl  = qsParms.tbl        || 'guitarsy'
  let fld1 = qsParms.fld1       || 'makey'
  let fldVl1 = qsParms.fldVl1   || 'Washburny'
  let fld2 = qsParms.fld2       || 'makey'
  let fldVl2 = qsParms.fldVl2   || 'Washburny'
  let fld3 = qsParms.fld3       || 'makey'
  let fldVl3 = qsParms.fldVl3   || 'Washburny'
  let maxRows = qsParms.maxRows || '1'
  console.log(tbl)
  console.log(fld1)
  console.log(fldVl1)
  console.log(fld2)
  console.log(fldVl2)
  console.log(fld3)
  console.log(fldVl3)
  console.log(maxRows)
  console.log('40 supabaseClient type:')
  console.log(typeof supabaseClient)
  // const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
  // const genericResponse = {
  //   statusCode: 200,
  //   headers: {'Access-Control-Allow-Origin': '*'},
  //   body: JSON.stringify(myObj1)
  // }
  // console.log('myObj1: ', myObj1)
  console.log('we reached line 48 readSupabase')    

  const { data } = await supabaseClient
  .from(tbl).select()
  .eq(fld1, fldVl1)
  .eq(fld2, fldVl2)
  .eq(fld3, fldVl3)
  .limit(maxRows)
  console.log('supabase data has type:')
  // console.log(typeof data)
  // console.table(data)  // only appears when the field name is 'data'. blaming supabase.
  console.log('supabase data: ', data)
  // console.log(data[0].make)  //this works, so data must be an array?
  console.log('we reached line 60 readSupabase')

  supabaseData = data
  console.log('supabaseData:')
  console.table(supabaseData)
  supabaseJsonStringify = JSON.stringify(supabaseData)
  console.log('80 supabaseJsonStringify:')
  console.table(supabaseJsonStringify)
  var myObj2 = {  supabaseData }

  const myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }

  console.log('we reached the end of readSupabase. ready to return.')
  // return genericResponse
  return myResponse  //billy iz this working?

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
  
  ////////////////////////////////////////
