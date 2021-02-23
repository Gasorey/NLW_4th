import 'reflect-metadata'
import express, { Request, Response } from 'express'
import './database'

const app = express()


app.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Server is running on port 3333'
  })
})

app.post('/', (request: Request, response: Response) => {
  return response.json({
    message: 'SavedData'
  })
})

app.listen(3333, () => { 
  console.log("Server Up on port 3333")
}) 