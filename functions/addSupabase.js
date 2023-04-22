import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: appendSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  console.log('10 appendSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13  appendSupabase')
  let myTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if (myKey!='tbl' && myKey!='id'){//we only want field names, not table name, not id.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    } // end if
  }  // end for
  myTxt = myTxt.substring(0, myTxt.length - 1) + '}' // remove last comma, stick bracket on end.
  console.log('22 appendSupabase myTxt:')
  console.log(myTxt)
  let myFldsObj= JSON.parse(myTxt)
  console.log('25 appendSupabase myFldsObj:',myFldsObj)
  let { data , error } = await supabaseClient
  .from(tbl)              // ("qtAnswers")    
  .insert( myFldsObj )    // {'cust': '62', 'qid': '116'}
  .select()

 if (error){console.log('error from appendSupabase.',error)}
 if (data){console.log('got data from appendSupabase.',data)}
  console.log('we reached line 33 appendSupabase')
  let supabaseData = data //supabase seems to like the word 'data'
  console.log('supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 201,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('43 we reached the end of appendSupabase lambda. ready to return.')
  return myResponse   
} // end export.handler 