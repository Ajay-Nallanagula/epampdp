import { Link } from "react-router-dom"
import './css/mediacard.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
//import { setQuantity } from "../ecommStore/cartReducer"

const MediaCard = ({ item, onAddCartClick, OnAddQuantity, OnSubQuantity }) => {
    const dispatch = useDispatch()

    const handleQuantityAddClick = () => {
        OnAddQuantity(item)
    }

    const handleQuantitySubClick = () => {
        OnSubQuantity(item)
    }

    return <div class="row">
        <div class="col s12 m7">
            <div class="card">
                <div class="card-image">
                    <img src={item.img}></img>
                    <span class="card-title">{item.title}</span>
                    <span to="/" onClick={onAddCartClick} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>

                </div>
                <div class="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                    <p>
                        <b>Quantity: {item.quantity}</b>
                    </p>
                    <div className="add-remove">
                        <Link to="/cart"><i className="material-icons" onClick={handleQuantityAddClick}>arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons" onClick={handleQuantitySubClick}>arrow_drop_down</i></Link>
                    </div>
                    <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                </div>
                {/* <div class="card-action">
                    <a href="#">This is a link</a>
                </div> */}
            </div>
        </div>
    </div>
}

export default MediaCard