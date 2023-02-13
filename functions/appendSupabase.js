import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: appendSupabase')
  const qsParms = event.queryStringParameters
  console.table(qsParms)
  let tbl  = qsParms.tbl            || 'guitarsy'
  let fields = qsParms.fields       || 'makey'

  let maxRows = qsParms.maxRows || '1'
  console.log(' tbl: ',tbl)
  console.log(' fields: ',fields)
  console.table(fields)
  let myFieldsObj = JSON.parse(fields)
  console.log('18 myfieldsObj:')
  console.table(myFieldsObj)

  console.log('21 ready to run supabaseClient')
  const { data , error } = await supabaseClient
.from(tbl) //('qtAnswers')    //(tbl)  //tblObj {'cust': '62', 'qid': '116'}
//.insert( myFieldsObj )
.insert([{'cust': '622', 'qid': '1162'}])
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
