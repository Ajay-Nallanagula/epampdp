import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaCard from './MediaCard';
import './css/home.css'
import { addToCart, addQuantity, subQuantity, setQuantity } from '../ecommStore/cartReducer';

class Home extends Component {

    handleAddCartClick(item) {
        this.props.addToCart({ id: item.id, quantity: item.quantity })
    }

    handleQuantityAddClick(item) {
        this.props.setQuantity({ id: item.id, quantity: item.quantity + 1 })
    }

    handleQuantitySubClick(item) {
        this.props.setQuantity({ id: item.id, quantity: item.quantity > 0 ? item.quantity - 1 : 0 })
    }

    render() {
        const { items } = this.props
        console.log({ total: this.props.total })
        return (
            <div className="container">
                <ul >
                    {
                        items.map(item => {
                            return (<li className='ulInline'>
                                <MediaCard
                                    onAddCartClick={() => this.handleAddCartClick(item)}
                                    item={item}
                                    OnAddQuantity={() => this.handleQuantityAddClick(item)}
                                    OnSubQuantity={() => this.handleQuantitySubClick(item)}
                                />
                            </li>)
                        })
                    }
                </ul>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.items,
        addedItems: state.addedItems,
        total: state.total

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: ({ id, quantity }) => dispatch(addToCart({ id, quantity })),
        setQuantity: ({ id, quantity }) => dispatch(setQuantity({ id, quantity })),
        //  addQuantity: id => dispatch(addQuantity({ id, quantity })),
        //subQuantity: id => dispatch(subQuantity({ id, quantity }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
