import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: readSupabase')
  const qsParms = event.queryStringParameters
  // console.table(qsParms)
  let tbl  = qsParms.tbl        || 'guitarsy'
  let fld1 = qsParms.fld1       || 'makey'
  let fldVl1 = qsParms.fldVl1   || 'Washburny'
  let fld2 = qsParms.fld2       || 'makey'
  let fldVl2 = qsParms.fldVl2   || 'Washburny'
  let fld3 = qsParms.fld3       || 'makey'
  let fldVl3 = qsParms.fldVl3   || 'Washburny'
  let maxRows = qsParms.maxRows || '1'
  console.log(tbl)
  console.log(fld1)
  console.log(fldVl1)
  console.log(fld2)
  console.log(fldVl2)
  console.log(fld3)
  console.log(fldVl3)
  console.log(maxRows)
  const { data } = await supabaseClient
  .from(tbl).select()
  .eq(fld1, fldVl1)
  .eq(fld2, fldVl2)
  .eq(fld3, fldVl3)
  .limit(maxRows)
  console.log('we reached line 32 readSupabase')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('supabaseData:')
  console.table(supabaseData)
  var myObj2 = {  supabaseData }

  const myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('we reached the end of readSupabase. ready to return.')
  return myResponse  //billy iz this working?
} // end export.handler 
