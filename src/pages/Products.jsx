
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://r2h-ecom-backend.herokuapp.com/")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
            .then(console.log(products))
    },[])
        return (
                <section className="main__section product__main">
                    <h1 className="main__title terminal terminal--purple">~$ Shop...</h1>
                    <ul className="product__list">
                        {products.map(product => {
                            return <ProductCard key={product.id} products={product} />
                        }
                        )}
                    </ul>
                </section>
        )
}