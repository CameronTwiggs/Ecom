import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ProductCard from './ProductCard';

// let test = {
//     id: 0,
//     title: "Bash",
//     summary: "A great way to get started with Bash",
//     price: 9999,
//     image_url: "./images/products/bash.jpg",
// }

export default class ProuductCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFetched: false,
            products: [],
            randomProducts: [],
        }
    }

    async getRandomProduct() {
        if (this.state.dataFetched === false) {
            let response = await fetch("https://r2h-ecom-backend.herokuapp.com/");
            let data = await response.json();
            for (let i = 0; i < 3; i++) {
                let randomIndex = Math.floor(Math.random() * data.length);
                let randomProduct = data[randomIndex];
                data.splice(randomIndex, 1);
                this.state.randomProducts.push(randomProduct);
            }
            this.setState({
                dataFetched:true,
                products: data,
            });
            console.log("ding")
        }
    }

    // I could make an endpoint that does the randomness for me and I could just call it in the render function
    
    render() {
        return (
            this.getRandomProduct(),
            <Carousel>
             {this.state.randomProducts.map(product => {
                return <ProductCard key={product.id} products={product} settings={"div"}/>
             })}
            </Carousel>
        );
    }
};

