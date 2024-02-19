'use client'

import { useFormStatus } from 'react-dom'

const FormSubmit = () => {
    const status = useFormStatus()

    if (status.pending) {
        return <button type="submit" disabled={true}>Submitting.....</button>
    }

    return (
        <button type="submit">Share Meal</button>
    )
}

export default FormSubmit