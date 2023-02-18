import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: appendSupabase')
  const qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  console.log('10 appendSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13  appendSupabase')
  let myTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'){//we only want field names, not the table name.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    }
 }
 myTxt = myTxt.substring(0, myTxt.length - 1) + '}' // remove last comma, stick bracket on end.
 console.log('22 appendSupabase myTxt:')
 console.log(myTxt)

  console.log('52 lambda function appendSupabase')
  let fldsObj= JSON.parse(myTxt)
  console.log('27 appendSupabase fldsObj:',fldsObj)
  const { data , error } = await supabaseClient
  .from(tbl) //("qtAnswers")    //(tbl)  //tblObj {'cust': '62', 'qid': '116'}
  .insert( fldsObj )
  .select()

if (error){console.log('error from appendSupabase.',error)}
if (data){console.log('got data from appendSupabase.',data)}

  console.log('we reached line 36 appendSupabase')
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
