
let myFaunaCollection = 'qtUsers'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const supabase = require('@supabase/supabase-js') //billy
const q = faunadb.query
const myQid = '1'
const myCust = '2'

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 

  console.log('Netlify Function readUsers2 invoked.')
  
  // return client.query(q.Paginate(q.Match(q.Index('qtUsersX1'),[myCust,myQid]),{ size: 500 }))
  return client.query(q.Paginate(q.Match(q.Index('qtUsersX1'),[myCust,myQid]),{ size: 500 }))
    .then((response) => {
    const responser = response.data
    console.log('responser from db:', responser)
    console.log(`${responser.length} responsers found`)
    const getAllqtUsersDataQuery = responser.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllqtUsersDataQuery).then((ret) => {
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

