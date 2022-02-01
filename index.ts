import express from 'express'
import cors from 'cors'

import Event from './entities/event'
import EventDAO from './daos/event-dao'
import EventLocalDao from './daos/local-dao'
import EventService from './services/event-service'
import EventServiceImpl from './services/event-service-impl'

const app = express()
app.use(express.json())
app.use(cors())

const eventDAO: EventDAO = new EventLocalDao()
const eventService: EventService = new EventServiceImpl(eventDAO)

// get all events
app.get("/events", (req, res) => {

});

app.get("/events/:id", async (req, res) => {
    const { id } = req.params;
    const event: Event = await eventService.retrieveEventById(id);
    res.send(event)
})

app.post("/events", (req, res) => {

});

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




app.listen(3000, () => console.log("Hello"))