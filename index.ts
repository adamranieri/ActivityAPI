import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

// get all events
app.get("/events", null);
app.get("/events/:id")

app.post("/events", null);

app.put("/events/:id", null)

app.patch("/events/:id/cancel",null)



app.listen(3000, ()=> console.log("Hello"))