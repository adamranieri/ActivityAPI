
export default interface EventService{

    retrieveEventById(id:string):Promise<Event>

    retrieveAllEvents():Promise<Event[]>

    addEvent(event:Event):Promise<Event>

    cancelEvent(id:string):Promise<Event>

    updateEvent(event:Event):Promise<Event>

}