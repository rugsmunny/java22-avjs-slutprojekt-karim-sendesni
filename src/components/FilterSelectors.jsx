
export default function FilterSelect({products, filterProducts, filter, sortPrice, priceOrder}) {


    const brands = products.map(p => p.brand)

    const uniqueBrandValues = brands.reduce((tempArr, val) => {
        if (!tempArr.includes(val)) {
            tempArr.push(val);
        }
        return tempArr;
    }, []);

    let id = 0; // Försök till att sätta unika key id till child elements

    return (
        <>
            <div className="dropdown">
                <ul className="dropbtn">❰ brand ❱ {filter !== 'all' && filter}</ul>
                <div className="dropdown-content">
                   <li key='all' onClick={(event) => filterProducts(event.target.innerText)}
                       > all</li>
                    {
                        uniqueBrandValues.map(brand => <li key={'listFilter' + {brand} + id++}
                                                      value={brand}
                                                      onClick={(event) => filterProducts(brand)}
                        >❱ {brand}</li>)
                    }
                </div>
            </div>
            <div className="dropdown">
                <ul className="dropbtn">❰ price ❱</ul>
                <div className="dropdown-content">

                    <li key={'listFilter' + id++} value='lowToHigh'
                        style={priceOrder === 'descending' ? {backgroundColor: "#3378"} : {}}
                        onClick={(event) => sortPrice(event.target.innerText)}>descending</li>
                    <li key={'listFilter' + id++} style={priceOrder === 'ascending' ? {backgroundColor: "#3378"} : {}}
                        onClick={(event) => sortPrice(event.target.innerText)}>ascending</li>

                </div>
            </div>
        </>
    )
}