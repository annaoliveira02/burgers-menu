const Product = ({handleClick, product}) => {
    return (
        <div className="productDisplay">
            <img src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <p>Categoria: {product.category}</p>
            <p>Preço: ${product.price}</p>
            <button onClick={() => handleClick(product.id)}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Product;