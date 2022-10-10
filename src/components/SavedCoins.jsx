import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SavedCoins = () => {
    const [coins, setCoins] = useState([])

    return (
        <div>
            {coins.length === 0 ? (<p>Now you don't have any coins. Please save a coin to add in the list <Link to='/'>Click here to search coins</Link></p>) : (
                <table className='w-full border-collapse text-center'>
                    <thead>
                        <tr className='border-b'>
                            <th className='px-4'>Rank</th>
                            <th className='text-left'>Coins</th>
                            <th className='text-elft'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => (
                            <tr className='h-[60px] overflow-hidden' key={coin.id}>
                                <td>{coin?.rank}</td>
                                <td>
                                    <Link to={`/coin/${coin.id}`}>
                                        <div className='items-center flex'>
                                            <img className='w-8 mr-4' src={coin?.image} alt={coin?.name} />
                                            <div>
                                                <p className='hidden sm:table-cell'>{coin?.name}</p>
                                                <p className='text-gray-500 text-left text-sm'>{coin?.symbol}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </td>
                                <td className='pl-8'>
                                    <AiOutlineClose className='cursor-pointer'/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default SavedCoins;
