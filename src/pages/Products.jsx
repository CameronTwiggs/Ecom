
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

    const updateData = (filter) => {
        setFilter(filter);
        document.getElementsByTagName("")
    }


    return (
        <section className="main__section product__main">
            <h1 className="main__title terminal terminal--purple">~$ Shop...</h1>
            <div className="filter__wrapper">
                <button className="filter__button" onClick={() => updateData("low")}>Low-High</button>
                <button className="filter__button" onClick={() => updateData("high")}>High-Low</button>
                <button className="filter__button" onClick={() => updateData("")}>Default</button>
            </div>
            <ul className="product__list">
                {products.map(product => {
                    return <ProductCard key={product.id} products={product} settings={"li"}/>
                })}
            </ul>
        </section>
    )
}

