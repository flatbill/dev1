
let myFaunaCollection = 'qtUsers'
// import { ViewRef } from "@angular/core"
/* Import faunaDB sdk */
//const faunadb = require('faunadb')
// const fetch = require("node-fetch")
// supabaser = require('supabase')
const {helloWorld} = require('./utils')
//const {supabaser} = require('./utils/supabase')
// const supabaser = require('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm')  

// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js'
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
//import { v4 } from "https://deno.land/std@0.136.0/uuid/mod.ts"
// const sb = require( 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js')


// const q = faunadb.query
exports.handler = (event, context, callback) => {
  console.log('20 Netlify Function readUsers2 invoked.')
  const supaAnonKey = process.env.supaAnonKey
  //console.log('supaAnonKey has been set to ', supaAnonKey)
  const supaUrl = process.env.supaUrl
  // console.log('supaUrl has been set to', supaUrl)
  console.log('readUser2 line 25')
  const supaClient = createClient(supaUrl, supaAnonKey)

    //   let { data: todoList, error } = await this.supaClient

  // return client.query(q.Paginate(q.Match(q.Index('qtUsersX1'),[myCust,myQid]),{ size: 500 }))
  return supaClient  //.createClient(supaUrl, supaAnonKey)
    .then((response) => {
    const responser = response.data
    console.log('responser from db:', responser)
    console.log(`${responser.length} responsers found`)
    const getAllqtUsersDataQuery = responser.map((ref) => {
      return supaClient.Get(ref)
    })
    // then query the refs
    return supaClient.query(getAllqtUsersDataQuery).then((ret) => {
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(ret)
      }
    })
  }).catch((error) => {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}

