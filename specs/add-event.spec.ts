import EventDAO from "../daos/event-dao"
import EventLocalDao from "../daos/local-dao"
import EventServiceImpl from "../services/event-service-impl"
import Event from '../entities/event'





describe('test if events are valid',()=>{
    const DAO:EventLocalDao = new EventLocalDao()
    const eventService:EventServiceImpl= new EventServiceImpl(DAO)
    it("should throw an error",()=>{
        const event:Event ={
            id: "",
            title: "",
            desc: "",
            startTime: 0,
            endTime: 0,
            location: "",
            status: "On Schedule"
        }
        eventService.addEvent(event)
    })

    it("should succesfully create",()=>{
        const event:Event ={
            id: "",
            title: "",
            desc: "",
            startTime: 0,
            endTime: 10,
            location: "",
            status: "On Schedule"
        }
        eventService.addEvent(event)

    })
})