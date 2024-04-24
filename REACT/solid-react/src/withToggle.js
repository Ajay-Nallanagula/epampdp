import { useState } from "react"

const withToggle = (Component) => {
    return function ToggleAction() {
        const [toggle, setToggle] = useState(true)

        const handleToggle = () => {
            setToggle(!toggle)
        }

        return <Component toggle={toggle} handleToggle={handleToggle} />
    }
}

export default withToggle