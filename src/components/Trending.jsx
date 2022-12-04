import React, {useState, useEffect} from 'react';
import axious from 'axios'
import {Link} from 'react-router-dom'

const Trending = ({coins}) => {
    const [trending, setTrending] = useState([])
    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {
        axious.get(url).then((response) => {
            
            setTrending(response.data.coins)
            console.log(response.data.coins)
        })
    }, [])


    return (
       
         <div className='rounded-div my-12 py-8 text-primary'>
            <h1 className='text-2xl font-bold py4'>Trending Coins</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {trending.map((coin, index) => (
                   <Link key={coin.item.name} to={`coin/${coin.item.id}`}>
                         <div  className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex'>
                                <img className='mr-4 rounded-full' src={coin.item.small} alt={coin.item.name}></img>
                                <div>
                                    <p className='font-bold'>{coin.item.name}</p>
                                    <p>{coin.item.symbol}</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='w-4 m-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' alt=''></img>
                                <p>{coin.item.price_btc.toFixed(7)}</p>
                            </div>
                        </div>
                    </div>
                   </Link>
                ))}
            </div>
        </div>
      
    );
}

export default Trending;
