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



const eventDAO:EventDAO = new EventLocalDao()
const eventService:EventService = new EventServiceImpl(eventDAO)


// get all events
app.get("/activities", async (req, res) => {
    const events:Event[] = await eventService.retrieveAllEvents()
    res.send(events)
});

app.get("/activities/:id", async (req, res) => {
    const { id } = req.params;
    const event: Event = await eventService.retrieveEventById(id);
    res.send(event)
})


app.post("/activities", async (req,res)=>{
    try {
        const event:Event = req.body
        const ReturnEvent = await eventService.addEvent(event)
        res.status(201)
        res.send(ReturnEvent);
    } catch (error) {
        res.status(400)
        res.send(error)
    }
})

app.put("/activities/:id",async (req, res) => {
    let event:Event = req.body
    event.id = req.params.id
    event =await eventService.updateEvent(event)
    res.send(event)

})

app.patch("/activities/:id/cancel", async (req, res) => {
    try {
        const { id } = req.params;
        let updatedEvent = await eventService.cancelEvent(id);
        res.send(updatedEvent);
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
})





app.listen(3000, () => console.log("App started"))
