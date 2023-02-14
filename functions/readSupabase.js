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
  let fld1v = qsParms.fld1v   || 'Washburny'
  let fld2 = qsParms.fld2       || 'makey'
  let fld2v = qsParms.fld2v   || 'Washburny'
  let fld3 = qsParms.fld3       || 'makey'
  let fld3v = qsParms.fld3v   || 'Washburny'
  let fld4 = qsParms.fld4       || 'makey'
  let fld4v = qsParms.fld4v   || 'Washburny'
  let maxRows = qsParms.maxRows || '1'
  console.log(' tbl: ',tbl)
  console.log(' fld1: ',fld1)
  console.log(' fld1v: ',fld1v)
  console.log(' fld2: ',fld2)
  console.log(' fld2v: ',fld2v)
  console.log(' fld3: ',fld3)
  console.log(' fld3v: ',fld3v)
  console.log(' fld4: ',fld4)
  console.log(' fld4v: ',fld4v)
  console.log(' maxRows: ',maxRows)
  const { data } = await supabaseClient
  .from(tbl).select()
  .eq(fld1, fld1v)
  .eq(fld2, fld2v)
  .eq(fld3, fld3v)
  .eq(fld4, fld4v)
  .limit(maxRows)
  console.log('we reached line 32 readSupabase')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  const myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('we reached the end of readSupabase. ready to return.')
  return myResponse   
} // end export.handler 
