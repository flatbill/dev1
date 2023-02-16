import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: appendSupabase')
  const qsParms = event.queryStringParameters
  console.table(qsParms)
  let tbl  = qsParms.tbl        || 'guitarsy'
  let flds = qsParms.flds       || 'makey'
  console.log(qsParms.length)
  let myKeyTbl = Object.keys(qsParms).map(x => x +"|")
  let v = Object.values(qsParms).map(x => x + '^^' )
  console.table(myKeyTbl)
  console.table(v)

  console.log('14 appendSupabase')
  // console.log('answerPoints:')
  // console.log('qsParms.answerPoints')
  let foo = 'foo-----'
  for (let i=0;  i < myKeyTbl.length; i++){
    foo += foo + myKeyTbl[i]
    console.log('18 we are inside da loop ')
  }
  console.log('19 appendSupabase')
  console.log(foo)
  let maxRows = qsParms.maxRows || '1'
  console.log(' tbl: ',tbl)
  console.log(' flds: ',flds)
  console.table(flds)
  console.log('17 appendSupabase.js ')
  let fldsObj = {}
  // let myFieldsObj = JSON.parse(flds)
  // console.log('18 myfieldsObj:')
  // console.table(myFieldsObj)

  console.log('21 ready to run supabaseClient')
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
