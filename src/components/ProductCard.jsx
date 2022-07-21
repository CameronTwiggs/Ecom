import { Component } from 'react';  


export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.products.id,
            title: this.props.products.title,
            summary: this.props.products.summary,
            price: this.props.products.price,
            // image_url: this.props.products.image_url,
            image_url: "../images/products/bash.jpg",
        }
    }


    render() {
        return (
        <li className="list__item" id={this.state.id}>
            <img className="item__image" src={this.state.image_url} alt="product sticker" />
            <p className="item__desc">{this.state.title}</p>
            <p className="item__price">Price: ${this.state.price}</p>
            <p className="item__summary">{this.state.summary}</p>
            <button className="item__btn btn">Add To Cart!!</button>
        </li>
        )
    }
}
