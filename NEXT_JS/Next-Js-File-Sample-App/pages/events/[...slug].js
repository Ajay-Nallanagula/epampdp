import { useRouter } from "next/router"
import { getFilteredEvents } from "../../data/dummy-data"
import EventList from "../../components/events/event-list"
import ErrorAlert from "../../components/ui/error-alert"

const FilteredEventsPage = () => {
    const router = useRouter()
    const filteredData = router.query.slug
    console.log({ filteredData })
    if (!filteredData) {
        return <h2><p>Loading.....</p></h2>
    }
    const events = getFilteredEvents({ year: +filteredData[0], month: +filteredData[1] })

    if (!events?.length) {
        return <ErrorAlert><p>Invalid Date , No events Found!</p></ErrorAlert>
    }

    return <div>
        
        <EventList events={events} />
    </div>
}

export default FilteredEventsPage