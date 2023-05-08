export default function Product({product, addItemToCart, setProduct}) {

    const {alt, imgSrc, srcSet, name, price, stock} = product;

    function addToCart() {

        addItemToCart(prevState => {
            const itemExist = prevState.find(item => item.name === name);

            if (itemExist) {
                return prevState.map(product => product === itemExist ? {...product, amountInCart: product.amountInCart + 1} : product);
            } else {
                product.amountInCart = 1;
                return [...prevState, product];
            }

        });
        ///Uppdaterar stock för vald produkt så denna uppdateras på sidan
        setProduct(prevState => {
            return prevState.map(product => product.name === name ? {...product, stock: (product.stock - 1) }: product)
        })
    }

    return (
        <div className='card'>
            <section className="first-card-section"><img style={{opacity : !stock ? 0.5 : 1}} alt={alt} src={imgSrc} srcSet={srcSet}/><p
                className="title">{name}</p></section>
            <div className="product-info-container"><p className="price">${price}</p>
                <p className="qty">{stock > 0 ? 'Qty: ' + stock : 'Out of stock'}</p>
                <button className="add-to-cart-btn" onClick={addToCart} style={{display : !stock ? "none" : "block"}}>ADD TO CART</button>
            </div>
        </div>

    )
}