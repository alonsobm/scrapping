import express from 'express'
import { MongoClient } from 'mongodb'
import axios from 'axios'
import { load } from 'cheerio'

const uri = 'mongodb://root:root@127.0.0.1:27017'
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

async function run (): Promise<void> {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('successfully connected')
  } catch (e) {
    console.log(e)
  }
}

run().catch(console.log)

const app = express()

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

axios.get('https://www.elpais.es/').then((data) => {
  const d = data.data
  const cheerio = load(d)
  const res = cheerio('article').html()
  console.log(res)
}).catch(console.log)
