import Product from "../Product";

const MenuContainer = ({products, handleClick}) => {
    return(
        products.map(product => 
            <div key={product.id}>
                <Product product={product} handleClick={handleClick}/>
            </div>)
    )
}

export default MenuContainer;