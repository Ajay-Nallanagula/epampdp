import { useRef } from "react"
import Button from "../ui/button"
import classes from './event-item.module.css'

const EventSearch = (props) => {
    const yearsInputRef = useRef()
    const monthsInputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        const year = yearsInputRef.current.value
        const month = monthsInputRef.current.value
        props.onSearch(year, month)
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls} >
                <div className={classes.control}>
                    <label>Year</label>
                    <select id="year" ref={yearsInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label>Month</label>
                    <select id="month" ref={monthsInputRef}>
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <Button onClick="" type="submit">Search</Button>
                </div>
            </div>
        </form>
    )
}

export default EventSearch