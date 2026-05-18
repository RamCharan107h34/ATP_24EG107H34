

function Product(props){
    // get props from parent component
    const {productObj} = props
    // print props to console
    console.log(props)
    // return Product element
    return (
        <div className="shadow-2xl rounded-2xl shadow-gray-500 text-center py-3">
            <h1>Title: {productObj.title}</h1>
            <p>{productObj.description}</p>
        </div>
    )
}

export default Product;