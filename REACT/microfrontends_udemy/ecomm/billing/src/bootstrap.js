import faker from 'faker'

function mount(selector) {
    let products = ''
    for (let index = 0; index < 3; index++) {
        const name = faker.finance.accountName() //.commerce.productName()
        products += `<div><b>${name}</b></div>`
    }
    console.log({ selector }, { products })
    selector.innerHTML = products
}

export { mount }
