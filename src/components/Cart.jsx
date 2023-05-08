import CartEntries from "./CartEntries";

export default function Cart({cart, clearCart, setProduct, toggleView}) {

    async function patchProduct({endpoint, stock}) {

        const url = `https://miniprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/shoes/${endpoint}.json`;

        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"stock": stock}),
        });



    }

    function totalSumToChargeCustomer(){
       const checkOutSum =  cart.map(item => { return item.price.replace(',','') * item.amountInCart})
        return checkOutSum.reduce((a,b) => a + b, 0 )
    }

    function clearCartAndExit() {
        setProduct(products => {
            cart.map(cartProduct => {
                products.find(product => product.id === cartProduct.id).stock += cartProduct.amountInCart;
            });
            return [...products]
        })
        clearCart([]);
        toggleView();
    }

    function checkOut() {
        setProduct(products => {
            cart.map(cartProduct => {
                const productToUpdate = products.find(product => product.id === cartProduct.id);
                patchProduct(productToUpdate)
            });
            return [...products]
        });
        //const summa = totalSumToChargeCustomer();
        alert(`Skor för $${totalSumToChargeCustomer()}....Tack(?) för att du handlar hos oss, missa inte våran IG kampanj som kommer snart.`)
        clearCart([]);
        toggleView();
    }

    return (
        <>
            <div className="cart-container">
                {cart.length > 0 ? cart.map(item => <CartEntries key={item.id} product={item}/>) :
                    <p style={{float: "right", paddingRight: "4rem"}}>Cart is empty</p>}

            </div>
            {cart.length > 0 &&
                <div style={{float: "right", display: "flex", gap: "3rem", top: "2rem", position: "sticky"}}>
                    <p>Total sum: ${totalSumToChargeCustomer()}</p>
                    <button style={{border: "0.5px solid #477", borderRadius: "10%", padding: "0.6em", color: "black"}}
                            onClick={clearCartAndExit}>Clear cart
                    </button>
                    <button style={{border: "0.5px solid #477", borderRadius: "10%", padding: "0.6em", color: "black"}}
                            onClick={checkOut}>Checkout
                    </button>
                </div>}



        </>
    );
}
