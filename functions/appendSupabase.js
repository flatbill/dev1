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
  console.table(myFieldsObj)

  console.log('20 ready to run supabaseClient')
  const { data , error } = await supabaseClient
.from(tbl) //('qtAnswers')    //(tbl)  //tblObj {'cust': '62', 'qid': '116'}
.insert([ myFieldsObj
])
.select()
//  {'cust': '2', 'qid': '11'}

if (error){console.log('error from appendSupabase.',error)}
if (data){console.log('got data from appendSupabase.',data)}


  // const { data } = await supabaseClient
  // .from(tbl).select()
  // .eq(fld1, fldVl1)
  // .eq(fld2, fldVl2)
  // .eq(fld3, fldVl3)
  // .eq(fld4, fldVl4)
  // .limit(maxRows)
  console.log('we reached line 39 appendSupabase')
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
