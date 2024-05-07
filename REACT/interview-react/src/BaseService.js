class BaseService {

    async createResource(endpoint, newResource) {
        const config = {
            method: 'POST',
            headers: {
                Authorization: "bearer <someJWTToken>",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newResource)
        }
        //throw Error("Network Error")
        const resourceJsonPromise = await fetch(endpoint, config)
        const response = await resourceJsonPromise.json()
        return response
    }
}

export default new BaseService