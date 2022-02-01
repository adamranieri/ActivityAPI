import express from 'express'
import cors from 'cors'

import Event from './entities/event'
import EventDAO from './daos/event-dao'
import EventLocalDao from './daos/local-dao'
import EventService from './services/event-service'
import EventServiceImpl from './services/event-service-impl'
import requestLogger from './middleware/request-logger'
import { errorLogger } from 'express-winston'

const app = express()
app.use(express.json())
app.use(cors())


app.use(requestLogger);

const eventDAO:EventDAO = new EventLocalDao()
const eventService:EventService = new EventServiceImpl(eventDAO)


// get all events
app.get("/events", (req, res) => {

});

app.get("/events/:id", async (req, res) => {
    const { id } = req.params;
    const event: Event = await eventService.retrieveEventById(id);
    res.send(event)
})


app.post("/events", (req,res)=>{
    try {
        const event:Event = req.body
        const ReturnEvent = eventService.addEvent(event)
        res.status(201)
        res.send(ReturnEvent);
    } catch (error) {
        res.status(400)
        res.send(error)
    }
})

app.put("/events/:id", (req, res) => {

})

app.patch("/events/:id/cancel", async (req, res) => {
    try {
        const { id } = req.params;
        let updatedEvent = await eventService.cancelEvent(id);
        res.send(updatedEvent);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
})


app.use(errorLogger)


app.listen(3000, () => console.log("Hello"))
