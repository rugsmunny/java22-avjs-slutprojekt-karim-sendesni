import FilterSelect from "./FilterSelectors";

export default function Navbar({view, products,setFilter, filter, setPriceOrder, priceOrder, toggleView, toggleBtn, cart, displayCartAmount}){
    return(
        <div className="navbar">
            <ul>
                <li><a href="" className="logo">❰ s  n  e  a  k  y ❱</a></li>

                { view && <FilterSelect products={products} filterProducts={setFilter} filter={filter} sortPrice={setPriceOrder} priceOrder={priceOrder}/> }

                <li className="dropdown"><a onClick={toggleView}>{toggleBtn}</a>{(view && cart.length > 0) && <style className="cart-num">{displayCartAmount()}</style>}</li>
            </ul>

        </div>
    )
}