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
    cancelEvent(id: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    async updateEvent(event: Event): Promise<Event> {
        const foundEvent: Event = await this.retrieveEventById(event.id);
        if (!foundEvent) {
            throw new Error("Could not find Event with id" + event.id);
        }
        return this.eventDAO.updateEvent(foundEvent);
    }

}