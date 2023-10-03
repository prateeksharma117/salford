import { useContext, useEffect, useRef } from "react"
import UserDetailContext from "../context/UserDetailContext"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery } from "react-query"
import { getAllBookings } from "../utils/api"


const useBookings = () => {

    const {userDetail,setUserDetails}=useContext(UserDetailContext)
    const queryRef=useRef()
    const {user}=useAuth0()

    const{data,isLoading,isError,refetch}=useQuery({
        queryKey:"allBookings",
        queryFn:()=>getAllBookings(user?.email,userDetail?.token),
        onSuccess:(data)=>setUserDetails((prev)=>({...prev,bookings:data})),
        enabled:user!==undefined,
        staleTime:30000,
    })

    queryRef.current=refetch

    useEffect(() => {
    queryRef.current&&queryRef.current()
    }, [userDetail?.token])
    

  return {data,isError,isLoading,refetch}
}

export default useBookings