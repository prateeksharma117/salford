import {useState,useContext,useEffect} from 'react'
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from '../../hooks/useAuthCheck';
import { useMutation } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../../context/UserDetailContext';
import { checkFavorites, updateFavorites } from '../../utils/common';
import { toFav } from '../../utils/api';

const Heart = ({id}) => {

    const [heartColor, setHeartColor] = useState("white")
    const {validateLogin}=useAuthCheck()
    const {user} =useAuth0()

    const {
        userDetail: {favorites,token},
        setUserDetails,
    } = useContext(UserDetailContext);

    useEffect(() => {
        setHeartColor(()=>checkFavorites(id,favorites))
    }, [favorites])
    

    const {mutate}=useMutation({
        mutationFn:()=>toFav(id,user?.email,token),
        onSuccess:()=>{
            setUserDetails((prev)=>({
                ...prev,
                favorites:updateFavorites(id,prev.favorites)   
            }))
        }
    })
    
    const handleLike=()=>{
        if (validateLogin()) {
            mutate()
            setHeartColor((prev)=>prev==="#ff6055"?"white":"#ff6055")
        }
    }

  return (
    <>
    <AiFillHeart size={30} color={heartColor} onClick={(e)=>{
        e.stopPropagation();
        handleLike()
    }}/>
    </>
  )
}

export default Heart
