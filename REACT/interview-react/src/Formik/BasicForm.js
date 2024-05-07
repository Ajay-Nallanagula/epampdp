const BasicForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const firstName = form.elements['firstname'].value
        const lastName = form.elements['lastname'].value
        const middlename = form.elements['middlename'].value

        alert(`${firstName}-${lastName}-${middlename}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname"></input>
                </div>
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname"></input>
                </div>
                <div>
                    <label htmlFor="middlename">Middlename</label>
                    <input type="text" name="middlename"></input>
                </div>
            </section>
            <section>
                <input type="submit" />
            </section>

        </form>
    )
}

export default BasicForm