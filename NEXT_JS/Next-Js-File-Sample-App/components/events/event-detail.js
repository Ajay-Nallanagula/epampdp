import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from '../icons/date-icon.js'
import AddressIcon from '../icons/address-icon.js'
import ArrowRightIcon from "../icons/arrow-right-icon.js";

const EventDetail = ({ event }) => {
    const { id, title, date, description, location, image, isFeatured } = event;
    const foramttedAddress = location.replace(", ", "\n");
    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h3>{title}</h3>
                </div>
                {/* <div>

                    <p> {description} </p>
                </div> */}
                <div className={classes.date}>
                    <DateIcon />
                    <time>{date}</time>
                </div>
                <div>

                    <address>
                        <span className={classes.icon}><AddressIcon /></span>
                        {foramttedAddress}
                    </address>
                </div>
                <div className={classes.action}>
                    <Button link={`/events/${id}`}>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                        <span>Explore Link</span>
                    </Button>
                </div>
            </div>
        </li>
    );
};
export default EventDetail;
