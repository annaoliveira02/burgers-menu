import './App.css';
import { useState } from 'react'
import MenuContainer from './components/MenuContainer';
import { FaSearch } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
import bigKenzie from './images/big-kenzie.jpg'
import xSalada from './images/x-salada.jpg'
import hamburguer from './images/hamburger.jpg'
import xBurguer from './images/x-burguer.jpg'
import coca from './images/coca.png'
import fanta from './images/fanta.png'
import guarana from './images/guarana.png'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99, image: hamburguer},
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99, image: xBurguer},
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99, image: xSalada},
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99, image: bigKenzie},
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99, image: guarana},
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99, image: coca},
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99, image: fanta},
  ]); 

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([])

  const showProducts = (input) => {
    if (input.length > 0){
      let chosenProducts = products.filter(
        product => product.name.toLowerCase() === input.toLowerCase()
        || product.category.toLowerCase() === input.toLowerCase())
      setProducts(chosenProducts)}
      else {
        setProducts([
          { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99, image: hamburguer},
          { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99, image: xBurguer},
          { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99, image: xSalada},
          { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99, image: bigKenzie},
          { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99, image: guarana},
          { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99, image: coca},
          { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99, image: fanta},
        ]);
      }
  }

  const handleClick = (productId) => {
    let selectedProducts = products.find(product => product.id === productId)
    let verifyProduct = currentSale.find(product => product.id === productId)
    if (verifyProduct===undefined){
    setCurrentSale([...currentSale, selectedProducts])}
  }

  const removeFromCart = (productId) => {
    let removeProduct = currentSale.filter(product => product.id !== productId)
      setCurrentSale(removeProduct)
  }

  const ShowSale = () => {
    return(currentSale.map(currentItem =>
      <div className="cartProduct" key={currentItem.id}>
        <h3>1x {currentItem.name}</h3>
        <p>${currentItem.price}</p>
        <button className="cartButton" onClick={() => removeFromCart(currentItem.id)}><GrClose/></button>
      </div>
    ))
  }

  let totalValue = currentSale.reduce((acc, currentItem) => acc + currentItem.price, 0).toFixed(2)

  return (
    <div className="App">
      <header className="headerApp">
        <h1><GiHamburger/> Retro Burger <GiFrenchFries/></h1>
      </header>
      <div className="searchBar">
      <input
        placeholder="Pesquisar..."
        type="text"
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value)}
      />
        <button className="searchButton" onClick={() => showProducts(filteredProducts)}><FaSearch/></button>
      </div>
      <div className="menu">
        <MenuContainer products={products} handleClick={handleClick}/>
      </div>
      <div className="cart">
        <div className="cartPrice">
          <p>Valor total:</p>
          <h3>${totalValue}</h3>
        </div>
        <ShowSale/>
      </div>   
    </div>
  );
}

export default App;
