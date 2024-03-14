import EventDetail from "./event-detail"
import classes from './event-list.module.css'
const EventList = (props) => {
    const { events } = props
    return (
        <ul className={classes.list}>
            {events.map(event => <EventDetail event={event}/>)}
        </ul>
    )
}
export default EventList