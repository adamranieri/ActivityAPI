import EventDAO from '../daos/event-dao';
import EventLocalDao from '../daos/local-dao';
import Event from '../entities/event'
import EventService from '../services/event-service'
import EventServiceImpl from '../services/event-service-impl'

const eventDAO:EventDAO = new EventLocalDao()
const eventService:EventService = new EventServiceImpl(eventDAO)

describe("Event DAO specs", () => { 

    it("Return all events", async () => {
        const getEvents = await eventService.retrieveAllEvents();
        expect(getEvents).toBeTruthy();
    })

    it("Return an event by ID", async () => {
        const getEvent = await eventService.retrieveEventById("4121dfe8-ee09-4aef-81e7-ee5c4e366b94");
        expect(getEvent).toBeTruthy();
    })
}