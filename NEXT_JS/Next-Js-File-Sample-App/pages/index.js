import { useRouter } from "next/router"
import EventList from "../components/events/event-list"
import EventSearch from "../components/events/event-search"
import { getFeaturedEvents } from "../data/dummy-data"

const HomePage = () => {
    const events = getFeaturedEvents()
    const router = useRouter()

    function handleSearch(year, month) {
        const path = `/events/${year}/${month}`
        router.push(path)
    }
    return (
        <main>
            <h1> Home Page </h1>
            <EventSearch onSearch={handleSearch}></EventSearch>
            <EventList events={events} />
        </main>
    )
}

export default HomePage