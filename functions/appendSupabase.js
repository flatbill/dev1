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
  console.log('12 lambda function appendSupabase')
  let pissTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'){//we only want field names, not the table name.
      pissTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    }
 }
 pissTxt = pissTxt.substring(0, pissTxt.length - 1) + '}' // remove last comma, stick bracket on end.
 console.log(pissTxt)

  console.log('52 lambda function appendSupabase')
  console.log('66 lambda function appendSupabase')
  let fldsObj= JSON.parse(pissTxt)
  console.log(fldsObj)
  console.log('74 ready to run supabaseClient')
  const { data , error } = await supabaseClient
  .from(tbl) //("qtAnswers")    //(tbl)  //tblObj {'cust': '62', 'qid': '116'}
  .insert( fldsObj )
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
