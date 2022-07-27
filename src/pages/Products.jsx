
import ProductCard from "../components/ProductCard.jsx"
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://r2h-ecom-backend.herokuapp.com/${filter}`)
            const data = await result.json();
            setProducts(data);
        }
        fetchData();
    }, [filter])

    
    return (
        <section className="main__section product__main">
            <h1 className="main__title terminal terminal--purple">~$ Shop...</h1>
            <input type="text" />
            <button onClick={() => setFilter("low")}>Low</button>
            <button onClick={() => setFilter("high")}>High</button>
            <ul className="product__list">
                {products.map(product => {
                    return <ProductCard key={product.id} products={product} settings={"li"}/>
                })}
            </ul>
        </section>
    )
}

