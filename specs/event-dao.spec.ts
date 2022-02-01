import EventDAO from '../daos/event-dao';
import EventLocalDao from '../daos/local-dao';
import Event from '../entities/event'

describe("Event DAO specs", () => {

    const eventDao: EventDAO = new EventLocalDao()

    test("Should create an event", async () => {
        const event: Event = {
            id: "",
            location: "rooftop bar",
            startTime: 0, endTime: 0,
            title: "Test Event",
            desc: "Event for testing",
            status: "On Schedule"
        };

        const savedEvent = await eventDao.createEvent(event);
        expect(savedEvent.id).toBeTruthy()
    })

    test("Find event by id", async () => {
        const event: Event = {
            id: "",
            location: "rooftop bar",
            startTime: 0, endTime: 0,
            title: "Test Event",
            desc: "Event for testing",
            status: "On Schedule"
        };
        const savedEvent = await eventDao.createEvent(event);

        const retrivedEvent = await eventDao.getEventById(savedEvent.id)
        expect(savedEvent.location).toBe(retrivedEvent.location)
    })

    test("Should create, then cancel an event", async () => {
        const event: Event = {
            id: "",
            location: "Spikepit Beach",
            startTime: 0, endTime: 0,
            title: "Cancel Event",
            desc: "Cancel this Event",
            status: "On Schedule"
        };

        let savedEvent = await eventDao.createEvent(event);
        savedEvent = { ...savedEvent, status: "Cancelled" }
        const cancelledEvent = await eventDao.updateEvent(savedEvent);

        //or, do a get by ID and check status
        expect(cancelledEvent.status).toBe("Cancelled");
    })


})