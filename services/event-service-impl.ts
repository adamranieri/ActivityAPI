import EventDAO from "../daos/event-dao";
import EventService from "./event-service";
import Event from '../entities/event'

export default class EventServiceImpl implements EventService{

    constructor(private eventDAO:EventDAO){}

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
    updateEvent(event: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    
}