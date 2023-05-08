import Product from './Product';
import Cart from "./Cart";
import ScrollToTopBtn from "./ToTopScrollBtn";

export default function ProductContainer({
                                             products,
                                             view,
                                             toggleView,
                                             productFilter,
                                             priceOrder,
                                             setProducts,
                                             setCart,
                                             cart
                                         }) {

    //Koll för filtrering av märke och pris upp eller ner
    let productsToDisplay = products.filter(p => {
        return productFilter.length && productFilter !== 'all' ? p.brand === productFilter : p
    })

    if (priceOrder.length) {
        if (priceOrder === 'ascending') {
        productsToDisplay =  productsToDisplay.sort((a, b) => {
                if (parseInt(a.price.replace(',','')) < parseInt(b.price.replace(',',''))) return -1;
                console.log(productsToDisplay)
            return 0;

            })
        } else { productsToDisplay = productsToDisplay.sort((a, b) => {
            if (parseInt(a.price.replace(',','')) > parseInt(b.price.replace(',',''))) return -1;
            console.log(productsToDisplay)
return 0;
        })}
    }

    return (
        <>
            {view ? productsToDisplay.map((product) => <>
                    <Product key={product.id} product={product} cart={cart} setProduct={setProducts}
                             addItemToCart={setCart}/>
                    <ScrollToTopBtn view={view}/>
                </>)
                : <Cart clearCart={setCart} cart={cart} setProduct={setProducts} toggleView={toggleView}/>}
        </>
    )
}