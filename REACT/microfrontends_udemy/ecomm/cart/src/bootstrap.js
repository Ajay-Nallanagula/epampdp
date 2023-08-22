import faker from 'faker'

function mount(el) {
    const cartCount = faker.random.number()
    // document.querySelector('#dev-cart').innerHTML = `You have added ${cartCount} items.`
    el.innerHTML = `You have added ${cartCount} items.`
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-cart")
    if (el) {
        mount(el)
    }
}

export { mount }