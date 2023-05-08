export default function CartEntries({product}) {


    const {alt, imgSrc, srcSet, name, price, amountInCart} = product;
    return (
      
            <div className='cart-card'>
                <img alt={alt} src={imgSrc} srcSet={srcSet}/>
                <p className="price">{name}</p>
                <p className="price" style={{width: "fit-content"}}>$ {price}</p>
                <div className='cart-item-info'>
                    <p> # {amountInCart}</p>
                    <p>$ { amountInCart * parseInt(price.replace(',','')) }</p>

                </div>
            </div>
    )
}
