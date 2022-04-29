import './HomePage.css';

import {Link, Routes, Route} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Flowers from '../Flowers/Flowers';
import Views from '../Views/Views';
import Cities from '../Cities/Cities';
import Cart from '../Cart/Cart';


const HomePage = (props) =>{

    return(
        <div className='main'>
            <h1>Stock Photos</h1>
            <h4 className='user'>Hallo {localStorage.getItem("activUser")}</h4>
            <button className='button'>Log out</button>
            <h2>The best stock photos</h2>
            <Menu/>
            {/* <image></image> */}
            <Routes>
                <Route path='/homepage' element = {<span>HomePage</span>}/>
                <Route path='/flowers' element = {<Flowers addToCart={props.addToCart}/>}/>
                <Route path='/views' element = {<Views addToCart={props.addToCart}/>}/>
                <Route path='/cities' element = {<Cities addToCart={props.addToCart}/>}/>
                <Route path='/cart' element = {<Cart cart={props.cart} onRemove={props.onRemove} addToCart={props.addToCart}/>}/>
            </Routes>
        </div>
    )
}

export default HomePage;



