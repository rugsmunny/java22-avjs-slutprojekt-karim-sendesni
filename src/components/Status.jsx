export default function Status({status}){

    return(
        <div style={{padding: "20em 55em", width: "30em"}}>
            { status === 'loading' ? <><div className="loader"></div></> : <h1>Something went wrong</h1> }
        </div>
    )
}