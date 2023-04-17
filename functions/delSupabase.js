import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: delSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl          || 'defaultTable'
  let id   = qsParms.id           || '0'
  console.log('10 delSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13 id: ', id)

  if (id == '0') {
    console.log('16 caller made an error. he should pass in "id".')
    return
  }

  console.log('20 gonna await supabaseClient')

  let { data , error } = await supabaseClient
  .from(tbl)              // ("qtAnswers")    
  .delete()
  .eq('id',id)
  .select()
 if (error){console.log('27 error from delSupabase.',error)}
 if (data){console.log('28 got data from delSupabase.',data)}
  console.log('we reached line 29 delSupabase')
  let supabaseData = data //supabase seems to like the word 'data'
  console.log('31 supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('39 we reached the end of delSupabase lambda. ready to return.')
  return myResponse   
} // end export.handler 