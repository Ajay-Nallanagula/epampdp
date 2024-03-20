import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts, fetchProductById } from "../crud-store/reducer"

const App = () => {
    const products = useSelector(state => state.products)
    const selectedProductDetail = useSelector(state => state.selectedProductDetail)
    const [isShowDetail, setIsShowDetail] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const handleShowDetailsClick = (product) => {
        dispatch(fetchProductById(product))
        setIsShowDetail(true)
    }

    return (
        <div>
            {isShowDetail && <div>
                {JSON.stringify(selectedProductDetail)}
                <br></br>
                <button onClick={() => setIsShowDetail(false)}>Hide Details</button>
            </div>}
            <div>
                <ul>
                    {products.map(product => {
                        return <li>
                            <p><b>{product.title} {",  "} Rs.{product.price}</b></p>
                            <p>{product.description}</p>
                            <button onClick={() => handleShowDetailsClick(product)}>Show Details</button>
                            <hr />
                        </li>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default App
