import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: chgSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let id   = qsParms.id          || '0'

  console.log('14 chgSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)

  if (id == '0') {
    console.log('19 caller made an error. he should pass in "id".')
    return
  }

  console.log('23  chgSupabase')
  let myTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl' && myKey!='id'){
      //we only want field names, not the table name or rec id.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    } // end outer if
  }  // end for
  //replace last char with '}'
  myTxt = myTxt.substring(0, myTxt.length - 1) + '}'
  console.log('32 myTxt:',myTxt)
  console.log('33 id: ', id)

  let myObj = new Object
  myObj = JSON.parse(myTxt)
  console.log('37 gonna await supabaseClient')
  let { data } = await supabaseClient
  .from(tbl)
  .update(myObj)
  .eq('id', id)
  .select()

  console.log('we reached line 44 chgSupabase (after supabase call')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('46 supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('we reached the end of chgSupabase. ready to return.')
  return myResponse   
} // end export.handler 
