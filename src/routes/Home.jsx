import React from 'react';
import CoinSearch from '../components/CoinSearch';
import Trending from '../components/Trending';

const Home = (props) => {
    return (
        <div>
            <CoinSearch quantity={props.quantity} setQuantity={props.setQuantity} coins={props.coins}/>
            <Trending coins={props.coins}/>
        </div>
    );
}

export default Home;
