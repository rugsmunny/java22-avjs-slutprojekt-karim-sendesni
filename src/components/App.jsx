import Status from './Status'

import {useEffect, useState} from 'react'
import ProductContainer from "./ProductContainer";
import Navbar from "./Navbar";


export default function App() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('');
    const [view, setView] = useState(true)
    const [toggleBtn, setBtn] = useState('❰ cart ❱');
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState([])
    const [priceOrder, setPriceOrder] = useState([])


    async function getProducts() {
        setStatus('loading');

        const res = await fetch(`https://miniprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/shoes.json`);
        const data = await res.json();


        if (Array.isArray(data)) {

            // Spara denna kod ifall att nya produkter hämtas och de har samma ID
            // for (let i = 0; i < data.length; i++) {
            //     for (let j = 0; j < data.length; j++) {
            //
            //         if (i !== j) {
            //
            //             if (data[i].id === data[j].id) {
            //                 data[i].id = data[i].id + "x" + i + j;
            //             }
            //         }
            //     }
            // }


            setProducts(data.map((product) => product));

            setStatus('success');

        } else {
            setStatus('failed');
        }

    }



    useEffect(() => {
        getProducts();
    }, [])


    function toggleView() {
        setView(!view);
        view ? setBtn('❰ products ❱') : setBtn(`❰ cart ❱`);

    }

    function displayCartAmount(){
        const items = cart.map(p => { return p.amountInCart })
        return items.length > 0 && items.reduce((a,b) => {return a + b});
    }


    return (
        <>
            <Navbar view={view} products={products} setFilter={setFilter} filter={filter} setPriceOrder={setPriceOrder} priceOrder={priceOrder} toggleView={toggleView} toggleBtn={toggleBtn} cart={cart} displayCartAmount={displayCartAmount}/>
            <div className='shoe-container'>
                {(status === 'loading' || status === 'failed') && <Status status={status}/>}
                {status === 'success' &&
                    <ProductContainer products={products} view={view} setProducts={setProducts} productFilter={filter} priceOrder={priceOrder}  cart={cart} setCart={setCart} toggleView={toggleView}/>
                }
            </div>
        </>
    )
}
