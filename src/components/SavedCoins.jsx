import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { UserAuth } from '../context/AuthContext';


const SavedCoins = () => {
    const [coins, setCoins] = useState([])
    const {user} = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
            setCoins(doc.data()?.watchList)
        })
    }, [user?.email])

    const coinPath = doc(db, 'users', `${user.email}`)
    const deleteCoin = async (passedId) => {
        try {
            const result = coins.filter((item) => item.id !== passedId)
            await updateDoc(coinPath, {
                watchList: result
            })
        } catch(e) {
            console.log(e.message)
        }
    }


    return (
        <div>
            {coins?.length === 0 ? (<p>Now you don't have any coins. Please save a coin to add in the list <Link to='/'>Click here to search coins</Link></p>) : (
                <table className='w-full border-collapse text-center'>
                    <thead>
                        <tr className='border-b'>
                            <th className='px-4'>Rank</th>
                            <th className='text-left'>Coins</th>
                            <th className='text-elft'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins?.map((coin) => (
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
                                <td className='margin-auto'>
                                    <AiOutlineClose onClick={()=> deleteCoin(coin.id)} className='cursor-pointer'/>
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
