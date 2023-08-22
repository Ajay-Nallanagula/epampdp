import faker from 'faker'

function mount(el) {
    let products = ''
    for (let index = 0; index < 6; index++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    // document.querySelector("#products-dev").innerHTML = products
    el.innerHTML = products // something like ReactDOM.render(<App/>)
}

//Scenario 1 : This will run in local, when producst is run in isolation
//This will be set by webpack, mode property 
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#products-dev")
    if (el) {
        mount(el)
    }
}

//Scenario2: May not be exceuted, immediately/locally. Needs not render immediately, container will render
export { mount }