import { createClient } from '@supabase/supabase-js' 
const supaUrl = process.env.supaUrl
const supaAnonKey = process.env.supaAnonKey
const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
exports.handler = async (event, context) => {
  console.log('7 running Netlify lambda function: chgSupabase')
  let qsParms = event.queryStringParameters
  let tbl  = qsParms.tbl         || 'defaultTable'
  let id  = qsParms.id           || 0
  // let fld1 = ''
  // let fld1v = ''
  // let fld2 = ''
  // let fld2v = ''
  // let fld3 = ''
  // let fld3v = ''
  // let fld4 = ''
  // let fld4v = ''
  console.log('18 chgSupabase qsParms and tbl:')
  console.table(qsParms)
  console.table(tbl)
  console.log('21  chgSupabase')
  let myTxt = '{'
  let dq = '"'
  // let id = 0
  // let ii = 1
  for (let [myKey, myValue] of Object.entries(qsParms)) {
    if(myKey!='tbl'){//we only want field names, not the table name.
      myTxt += dq + myKey + dq + ':' + dq + myValue + dq + ','
      if (myKey == 'id'){id = myValue}
      // if (ii==1){
      //   fld1= myKey
      //   fld1v=myValue
      // }
      // if (ii==2){
      //   fld2= myKey
      //   fld2v=myValue
      // }
      // if (ii==3){
      //   fld3= myKey
      //   fld3v=myValue
      // }
      // if (ii==4){
      //   fld4= myKey
      //   fld4v=myValue
      // }
      // ii=ii+1 // loop increment, set one of these: fld1,2,3,4
    } // end outer if
  }  // end for

  //hack. can have up to to four supabase keys, but not all tables have four keys.
  //  so, re-use field1 as field2,3,4.
  // if (fld2 == ''){ // there aint no field2, so set field2 same as field1.
  //   fld2=fld1
  //   fld2v=fld1v
  // }
  // if (fld3 == ''){ // there aint no field3, so set field3 same as field1.
  //   fld3=fld1
  //   fld3v=fld1v
  // }
  // if (fld4 == ''){// there aint no field4, so set field4 same as field1.
  //   fld4=fld1
  //   fld4v=fld1v
  // }
  console.log('64 id: ',id)
  // make sure caller is passing in 'id' as fld1
  if (id == 0) {
    console.log('caller made an error. he should pass in "id".')
    return
  }

  let idNumeric = Number(id)
  console.log('73 id numeric:', idNumeric)

  console.log('75 gonna await supabaseClient')
  let { data } = await supabaseClient
  .from(tbl)
  .update(myTxt)
  .eq('id', idNumeric)
  .select()
  
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
