import EventList from "../../components/events/event-list"
import { getAllEvents } from "../../data/dummy-data"

const AllEventsPage = () => {
    const events = getAllEvents()
    return (
        <main>
            <EventList events={events} />
        </main>
    )
}

export default AllEventsPage