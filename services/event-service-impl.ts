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
        const check =(event.endTime> event.startTime)
        if(!check){ throw Error("invalid time input")}
        event.status = "On Schedule";
        const ReturnEvent = this.eventDAO.createEvent(event)
        return ReturnEvent;
    }
    cancelEvent(id: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    updateEvent(event: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    
}