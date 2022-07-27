
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from '../styles/products.scss'

const Products = () => {
    const [varState, setVarState] = useState([])
    useEffect(() => {
        Axios.get("https://tamaislandserver.herokuapp.com/test").then((response) => {
            /*console.log(response)*/
            setVarState(response.data)
        })
    }, [])
    const filterLow = () => {
        Axios.get("https://tamaislandserver.herokuapp.com/low").then((response) => {
            /*console.log(response)*/
            setVarState(response.data)
        })
    }
    const filterHigh = () => {
        Axios.get("https://tamaislandserver.herokuapp.com/high").then((response) => {
            /*console.log(response)*/
            setVarState(response.data)
        })
    }
    const filterNormal = () => {
        Axios.get("https://tamaislandserver.herokuapp.com/test").then((response) => {
            /*console.log(response)*/
            setVarState(response.data)
        })
    }
    const onChange = (x) => {
        if (x.target.value === 'low') {
            filterLow()
            console.log(x.target.value)
        } if (x.target.value === 'high') {
            filterHigh()
            console.log(x.target.value)

        } if (x.target.value === 'normal') {
            filterNormal()
            console.log(x.target.value)
        }
    }
    return (
        <div className="Products">
            <label for="price">Choose a Price:</label>

            <select name="price" id="p" onChange={onChange}>
                <option value="normal">Default</option>
                <option value="low">low</option>
                <option value="high">high</option>

            </select>
            {varState.map((value, key) => {
                return (

                    <div className="card">
                        <div className="card-img">
                            <img src={`${value.image}`} alt="products" />
                        </div>
                        <h2>{value.name}</h2>
                        <p>{value.descrip}</p>
                        <p className="price">${value.price}</p>
                        <div className="btnp">Add to cart</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;
