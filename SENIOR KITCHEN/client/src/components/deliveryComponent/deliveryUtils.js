const deliveryObj = require('../../mockdata/JSONSHEETS/deliveryDetails.json')

//export const getDeliveryObj = () => deliveryObj

const deliveryGuyData = (deliveryGuyItem) => {
    const delivered_customer_name = deliveryGuyItem['Customer Name']?.toLowerCase()
    const delivered_customer_location = deliveryGuyItem['Location']?.toLowerCase()
    const delivered_customer_payment = deliveryGuyItem['Payout']
    return { delivered_customer_name, delivered_customer_location, delivered_customer_payment }
}

const customerData = (delCustItem) => {
    const customer_name = delCustItem['Party Name']?.toLowerCase()
    const quantity = delCustItem['Quantity']
    const price_unit_to_customer = delCustItem['Price/Unit']
    const amount_charged_to_customer = delCustItem['Amount']
    return {
        customer_name, quantity, price_unit_to_customer, amount_charged_to_customer
    }
}

const findMatchingCustomerToDeliveredCustomer = (delCustItem) => {
    const { customer_name, quantity, price_unit_to_customer, amount_charged_to_customer } = customerData(delCustItem)
    const customerNameArray = customer_name.split(' ')
    const [customer_name_no_salutation, ...restArray] = customerNameArray
    const nameNoSalutation = restArray.toString().split(',').join(' ')
    const nameMatches = deliveryObj.delivery_naveen.filter(deliveryGuyItem => {
        const { delivered_customer_name, delivered_customer_location, delivered_customer_payment } = deliveryGuyData(deliveryGuyItem)
        if (nameNoSalutation.startsWith(delivered_customer_name)) {
            return {
                customer_name, quantity, price_unit_to_customer, amount_charged_to_customer,
                delivered_customer_name, delivered_customer_location, delivered_customer_payment
            }
        }
    }).map(item => !!item)

    if (nameMatches?.length !== 1) {
        let nameAndAddressMatch = []
        nameMatches.forEach(nameMatch => {
            const { customer_name, delivered_customer_name, delivered_customer_location } = nameMatch
            const cust_loc_combined_name = `${delivered_customer_name} ${delivered_customer_location}`
            if (nameNoSalutation.startsWith(cust_loc_combined_name)) {
                const resultObj = { ...nameMatch }
                nameAndAddressMatch.push(resultObj)
            }
        })
        return nameAndAddressMatch
    }

    return nameMatches
}

export const fetchPerPersonDelivery = () => {
    const { delivery_customer, delivery_naveen } = deliveryObj

    const results = delivery_customer.reduce((acc, delCustItem) => {
        // const {customer_name, quantity, price_unit_to_customer, amount_charged_to_customer} = customerData(delCustItem)
        const result = findMatchingCustomerToDeliveredCustomer(delCustItem)
        acc = [...acc, result]
        return acc
    }, [])
    return results
}



