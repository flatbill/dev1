

//const faunadb = require('faunadb')
// const fetch = require("node-fetch")
//import fetch from 'node-fetch'
// const supabaser = require('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm')  

// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js'
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
// import { v4 } from "https://deno.land/std@0.136.0/uuid/mod.ts"
// const sb = require( 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js')
//const sb = require('supabase')
//import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
//import { createClient } from '@supabase/supabase-js'
//import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js'
// const q = faunadb.query //billy
let supabase = require('@supabase/supabase-js') 
//import { createClient } from '@supabase/supabase-js'
exports.handler = async (event, context, callback) => {
  console.log('Netlify Function readUsers2 invoked.')
  const myQid = '1'
  const myCust = '2'
  const supaUrl = process.env.supaUrl
  const supaAnonKey = process.env.supaAnonKey
  console.log('line 25 readUser2.js')
  const myObj1 = {firstName: "Bill", age: 60, city: "Ocala"}
  const genericResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify(myObj1)
  }
  //const supabase = await createClient(supaUrl, supaAnonKey)
  console.log(typeof supabase)
  console.log('line 34 readUser2.js')

  return genericResponse
  ////////////////////////////////////////
  // return client.query(q.Paginate(q.Match(q.Index('qtUsersX1'),[myCust,myQid]),{ size: 500 }))
  return supabase.createClient(supaUrl, supaAnonKey)
    .then((response) => {
    const responser = response.data
    console.log('responser from db:', responser)
    console.log(`${responser.length} responsers found`)
    // const getAllqtUsersDataQuery = responser.map((ref) => {
    //   return supaClient.Get(ref)
    // })
    // then query the refs
    //return supaClient.query(getAllqtUsersDataQuery).then((ret) => {
      return hangMe 
  }).catch((error) => {
    console.log('error', error)
    return {
      statusCode: 405,
      body: JSON.stringify(error)
    }
  })  
}

