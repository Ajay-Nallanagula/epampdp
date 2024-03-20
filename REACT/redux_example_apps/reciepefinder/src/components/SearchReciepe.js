const SearchReciepe = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData(document.querySelector('form'))
        const actualData = Object.fromEntries(formData.entries());
        console.log(actualData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ingredients</label>
                <input type='text' name='txtIngredients'></input>
            </div>
            <div>
                <label>Dish</label>
                <input type='text' name='txtDish'></input>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    )
}

export default SearchReciepe