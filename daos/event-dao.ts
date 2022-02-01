import Event from "../entities/event";

export default interface EventDAO{

    getAllEvents():Promise<Event[]>

    getEventById(id:string):Promise<Event>

    createEvent(event:Event):Promise<Event>

    updateEvent(event:Event):Promise<Event>
}