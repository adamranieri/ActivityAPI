import EventDAO from "../daos/event-dao";
import EventService from "./event-service";
import Event from '../entities/event'

export default class EventServiceImpl implements EventService {

    constructor(private eventDAO: EventDAO) { }

    retrieveEventById(id: string): Promise<Event> {
        return this.eventDAO.getEventById(id)
    }
    retrieveAllEvents(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    addEvent(event: Event): Promise<Event> {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }

}