import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
exports.handler = async (event, context) => {
  console.log('6 running Netlify lambda function: chgSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let id   = qsParms.id          || '0'
  console.log('10 chgSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13 id: ', id)

  if (id == '0') {
    console.log('16 caller made an error. he should pass in "id".')
    return
  }

  let myTxt = '{'
  let dq = '"'
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl' && myKey!='id'){ //we only want field names, not the table name or rec id.
      // myValue = myValue.replaceAll(',', dq + myValue + dq)
      if( myValue.includes('[') ) {
        console.log ('25 myValue contains bracket')
        myValue  =  myValue.replaceAll('['  , '["')  //fix left bracket
        myValue  =  myValue.replaceAll(']'  , '"]')  //fix right bracket
        myValue  =  myValue.replaceAll(','  , '","')  //fix commas between array fields
        console.log('mValue: ',myValue)
      } else {
        myValue =  dq + myValue + dq 
      }  // end if
      myTxt = myTxt + dq + myKey + dq + ':' + myValue + ','
    } // end if
  }  // end for
  myTxt = myTxt.substring(0, myTxt.length - 1) + '}' //replace last char with '}'
  console.log('28 myTxt:',myTxt)

  let myObj = new Object
  myObj = JSON.parse(myTxt)
  console.log('32 myObj:')
  console.table(myObj)
  console.log('33 gonna await supabaseClient')
  // .update({ questTxt: 'Australia' }) // .update(myObj)

  let { data } = await supabaseClient
  .from(tbl)
  .update(myObj)
  .eq('id', id)
  .select()

  console.log('we reached line 42 chgSupabase (after supabase call')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('44 supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('52 we reached the end of chgSupabase. ready to return.')
  return myResponse   
} // end export.handler 
