import { fetchPerPersonDelivery } from "./deliveryUtils"

const DeliveryDetails = () => {
    console.log(fetchPerPersonDelivery())
    return (
        <div> Delivery Details</div>
    )
}

export default DeliveryDetails