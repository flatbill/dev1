import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: chgSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let id   = qsParms.id           || 'defaultId'
  let idNumeric = Number(id)
  console.log('12 id numeric:', idNumeric)

  console.log('14 chgSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)

  if (idNumeric == 0) {
    console.log('19 caller made an error. he should pass in "id".')
    return
  }

  console.log('23  chgSupabase')
  let myTxt = '{'
  let dq = '"'
  // let id = 0
  // let ii = 1
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl' && myKey!='id'){
      //we only want field names, not the table name or rec id.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
    } // end outer if
  }  // end for
  //replace last char with '}
  myTxt = myTxt.substring(0, myTxt.length - 1) + '}'
  console.log('36 myTxt:',myTxt)
  console.log('37 idNumeric: ',idNumeric)

  let myObj = new Object
  myObj = JSON.parse(myTxt)
  console.log('75 gonna await supabaseClient')
  let { data } = await supabaseClient
  .from(tbl)
  .update(myObj)
  .eq('id', 190)
  .select()
  //.update(myTxt)
  //.eq('id', idNumeric)
  // .update({"scoreboardName":"scoreboard03tw","scoreboardSeq":'37'})
  // .update({"cust":"2","qid":"4","scoreboardName":"scoreboard03tb","scoreboardNbr":"03","scoreboardSeq":"03"})

  console.log('we reached line 82 chgSupabase (after supabase call')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('84 supabaseData:')
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
