import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: delSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let id   = qsParms.id           || 'defauldId'
  console.log('10 delSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13  delSupabase')
  let myTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'){//we only want field names, not the table name.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    } // end if
  }  // end for

  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'&&myKey!='id'){//we only want field names, not table name, not id
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    } // end if
  }  // end for
  console.log('27 gonna await supabaseClient')

  myTxt = myTxt.substring(0, myTxt.length - 1) + '}' // remove last comma, stick bracket on end.
  console.log('30 delSupabase myTxt:')
  console.log(myTxt)
  let myFldsObj= JSON.parse(myTxt)
  console.log('33 delSupabase myFldsObj:',myFldsObj)
  console.log('34 delSupabase id:',id)
  let { data , error } = await supabaseClient
  .from(tbl)              // ("qtAnswers")    
  .delete()
  .eq('id',id)
  .select()
 if (error){console.log('error from delSupabase.',error)}
 if (data){console.log('got data from delSupabase.',data)}
  console.log('we reached line 43 delSupabase')
  let supabaseData = data //supabase seems to like the word 'data'
  console.log('supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('52 we reached the end of delSupabase lambda. ready to return.')
  return myResponse   
} // end export.handler 