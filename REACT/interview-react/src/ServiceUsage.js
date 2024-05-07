import { useEffect, useState } from "react"
import service from './BaseService'

const ServiceUsage = () => {
    const [loading, setLoading] = useState(false)
    const [resource, setResource] = useState()

    const handleCreateResourceClick = async (event) => {
        event.preventDefault()
        const form = event.target
        const fNameVal = form.elements["firstName"].value
        const lNameVal = form.elements["lastName"].value
        setLoading(true)
        try {
            const response = await service.createResource('https://dummyjson.com/products/add', { fNameVal, lNameVal })
            if (response.id > 0) {
                setResource({ fNameVal, lNameVal })
            }
            console.log(response)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>{ServiceUsage.name}</div>
            <div>{JSON.stringify(resource)}</div>
            <form onSubmit={handleCreateResourceClick}>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" name="firstName" />

                <label htmlFor="lastName">lastName</label>
                <input type="text" name="lastName" />
                <input type="submit" />
            </form>

        </>
    )

}

export default ServiceUsage