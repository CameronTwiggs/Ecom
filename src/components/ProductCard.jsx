import { Component } from 'react';  


export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.products.id || 1 ,
            title: this.props.products.title || "test",
            summary: this.props.products.summary || "test",
            price: this.props.products.price || 9999,
            image_url: this.props.products.image_url || "./images/bash.png",
            settings: this.props.settings || "li"
        }
    }



    render() {
            if(this.state.settings === "li") {
                return (
                    <li className="list__item" id={this.state.id}>
                    <img className="item__image" src={this.state.image_url} alt="product sticker" />
                    <div className='item__wrapper'>
                        <p className="item__desc">{this.state.title}</p>
                        <p className="item__price">Price: ${this.state.price}</p>
                        <p className="item__summary">{this.state.summary}</p>
                        <button className="item__btn btn">Add To Cart!!</button>
                    </div>
                </li>
                )
            } else if(this.state.settings === "div") {
                return (
                <div>
                    <img alt="nerd" src={this.state.image_url} />
                    <p className="legend">{this.state.title}</p>
                </div>
                )
            } 
        
    }
}






