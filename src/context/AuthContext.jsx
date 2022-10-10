import { createContext, useContext, useState, useEffect } from "react";
import {auth, db} from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {doc, setDoc} from 'firebase/firestore'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setuser] = useState({})
    
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        return setDoc(doc(db, 'users', email), {
            watchList: [],
        })
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsucbscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
        })
        return () => {unsucbscribe()}
    }, [])

    return (
        <UserContext.Provider value={{signUp, signIn, logout, user}}>
            {children}
        </UserContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(UserContext)
}