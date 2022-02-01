import EventDAO from "./event-dao";
import Event from "../entities/event";
import {writeFile, readFile} from 'fs/promises'
import { v4 } from "uuid";

export default class EventLocalDao implements EventDAO{

    getAllEvents(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    async getEventById(id: string): Promise<Event> {
        const buffer = await readFile('events.json')
        const events:Event[] = JSON.parse(buffer.toString())
        return events.find(ev=>ev.id===id)
    }
    async createEvent(event: Event): Promise<Event> {
        event.id = v4();
        const buffer = await readFile('events.json')
        const events:Event[] = JSON.parse(buffer.toString())
        events.push(event);
        await writeFile("events.json", JSON.stringify(events))
        return event
        
    }
    updateEvent(event: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    
}