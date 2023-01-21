
let myFaunaCollection = 'qtUsers'
/* Import faunaDB sdk */
//const faunadb = require('faunadb')
// const fetch = require("node-fetch")
// const supabaser = require('@supabase/supabase-js') //billy
const supabaser = require('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm')  

//import createClient from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// const q = faunadb.query

exports.handler = (event, context) => {
  console.log('Netlify Function readUsers2 invoked.')
  const myQid = '1'
  const myCust = '2'
  const supaUrl = process.environment.supaUrl
  const supaAnonKey = process.environment.supaAnonKey
  supaClient = supabaser.createClient(supaUrl, supaAnonKey)
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

