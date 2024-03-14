import { useRouter } from "next/router"
import { getEventById } from "../../data/dummy-data"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

const EventDetail = () => {
    const router = useRouter()
    console.log(router.query)
    const event = getEventById(router.query.eventId)
    if (!event) {
        <h2>No Event Found</h2>
    }

    return <>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </>
}

export default EventDetail