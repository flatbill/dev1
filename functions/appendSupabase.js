import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: appendSupabase')
  const qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'

  console.table(qsParms)
  console.table(tbl)
  // console.log(Object.values(qsParms))
  console.log('we reached lined 15 appendSupabase')
  let myFldNamesArray = Object.keys(qsParms).map(x => x )
  let myFldValsArray = Object.values(qsParms).map(x => x)
  console.table(myFldNamesArray)
  console.table(myFldValsArray)
  let dingo = {}
  console.log('20 appendSupabase')
  for (let i=0;  i < myFldNamesArray.length; i++){
    console.log(myFldNamesArray[i])
    console.log(myFldValsArray[i])
    console.log(myFldNamesArray[i]+ ':' + myFldValsArray[i])
    dingo = ' ' + myFldNamesArray[i]+ ':' + myFldValsArray[i]
  }
  console.table(dingo)
  console.log('25 appendSupabase')
  let fldsObj = {}

  console.log('30 ready to run supabaseClient')
  const { data , error } = await supabaseClient
  .from(tbl) //("qtAnswers")    //(tbl)  //tblObj {'cust': '62', 'qid': '116'}
  //.insert( fldsObj )
//.insert([{myFieldsObj}])
//.insert({myFieldsObj})
 .insert({'cust': '6240', 'qid': '116'})  //works
 .select()

if (error){console.log('error from appendSupabase.',error)}
if (data){console.log('got data from appendSupabase.',data)}

  console.log('we reached line 30 appendSupabase')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  const myResponse = {
    statusCode: 201,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('we reached the end of appendSupabase. ready to return.')
  return myResponse   
} // end export.handler 
