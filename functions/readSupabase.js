import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: readSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let fld1 = ''
  let fld1v = ''
  let fld2 = ''
  let fld2v = ''
  let fld3 = ''
  let fld3v = ''
  let fld4 = ''
  let fld4v = ''
  console.log('10 readSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('13  readSupabase')
  let myTxt = '{'
  let dq = '"'
  let ii = 1
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'){//we only want field names, not the table name.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
      if (ii==1){
        fld1= myKey
        fld1v=myValue
      }
      if (ii==2){
        fld2= myKey
        fld2v=myValue
      }
      if (ii==3){
        fld3= myKey
        fld3v=myValue
      }
      if (ii==4){
        fld4= myKey
        fld4v=myValue
      }
      ii=ii+1 // loop increment, set one of these: fld1,2,3,4
    } // end if
 }  // end for

  //hack. can have up to to four supabase keys, but not all tables have four keys.
  //  so, re-use field1 as field2,3,4.
  if (fld2 == ''){ // there aint no field2, so set field2 same as field1.
    fld2=fld1
    fld2v=fld1v
  }
  if (fld3 == ''){ // there aint no field3, so set field3 same as field1.
    fld3=fld1
    fld3v=fld1v
  }
  if (fld4 == ''){// there aint no field4, so set field4 same as field1.
    fld4=fld1
    fld4v=fld1v
  }
  console.log('62 ',fld1,fld1v,fld2,fld2v,fld3,fld3v,fld4,fld4v)
  console.log('63 gonna await supabaseClient')
  let { data } = await supabaseClient
  .from(tbl)
  .select()
  .eq(fld1, fld1v)
  .eq(fld2, fld2v)
  .eq(fld3, fld3v)
  .eq(fld4, fld4v)
  .limit(300)
  console.log('we reached line 71 readSupabase')
  supabaseData = data //supabase seems to like the word 'data'
  console.log('74 supabaseData:')
  console.table(supabaseData)
  let myObj2 = {  supabaseData }
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(myObj2)
  }
  console.log('81,',fld1,fld1v,fld2,fld2v,fld3,fld3v,fld4,fld4v)
  console.log('we reached the end of readSupabase. ready to return.')
  return myResponse   
} // end export.handler 
