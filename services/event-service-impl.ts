import EventDAO from "../daos/event-dao";
import EventService from "./event-service";
import Event from '../entities/event'

export default class EventServiceImpl implements EventService {

    constructor(private eventDAO: EventDAO) { }

    retrieveEventById(id: string): Promise<Event> {
        return this.eventDAO.getEventById(id)
    }
    retrieveAllEvents(): Promise<Event[]> {
        return this.eventDAO.getAllEvents()
    }
    addEvent(event: Event): Promise<Event> {
        const check =(event.endTime> event.startTime)
        if(!check){ throw Error("invalid time input")}
        event.status = "On Schedule";
        const ReturnEvent = this.eventDAO.createEvent(event)
        
        return ReturnEvent;
    }
    async cancelEvent(id: string): Promise<Event> {
        let event: Event = await this.retrieveEventById(id);
        if (!event) {
            throw new Error("Could not find Event with id: " + id);
        }
        event.status = "Cancelled";
        const updatedEvent: Event = await this.updateEvent(event);
        return updatedEvent;
    }
    updateEvent(event: Event): Promise<Event> {
        return this.eventDAO.updateEvent(event)
    }

}