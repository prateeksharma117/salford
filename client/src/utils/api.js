import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import data from "./accordion";

export const api = axios.create({
    baseURL: "https://salford-backend.vercel.app/api",
});

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allResidency", {
            timeout: 10 * 1000,
        });
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (e) {
        toast.error("Something went wrong");
        throw e;
    }
};

export const getProperty = async (id) => {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        });
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (e) {
        toast.error("Something went wrong");
        throw e;
    }
};

export const createUser = async (email, token) => {
    try {
        await api.post(
            `/user/register`,
            { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (e) {
        toast.error("Something went wrong, Please try again later");
        throw e;
    }
};

export const bookVisit = async (date, propertyId, email, token) => {
    try {
        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY"),
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (e) {
        toast.error(
            "Visit is not booked due to some issue, Please try again later"
        );
        throw e;
    }
};

export const removeBooking = async (id, email, token) => {
    try {
        await api.post(
            `/user/cancelBooking/${id}`,
            {
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}}`,
                },
            }
        );
    } catch (e) {
        toast.error("something went wrong, please try again later")
        throw e
    }
};


export const toFav=async(id,email,token)=>{
    try {
        await api.post(`/user/favResidency/${id}`,
        {
            email,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }
        )
    } catch (e) {
        toast.error("Check your internet connection")
        throw e
    }
}

export const getAllFav=async(email,token)=>{
    if(!token) return
    try {
        const res=await api.post(`/user/allFavResidency`,
        {
            email,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        },
        )
        return res?.data["favResidenciesId"],
        console.log(data)
    } catch (e) {
        toast.error("something went wrong while fetching favorites")
        throw e
    }
}

export const getAllBookings=async(email,token)=>{
    if(!token) return
    try {
        const res=await api.post(`/user/allBookings`,
        {
            email,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        },
        )
        return res.data["bookedVisits"]
    } catch (e) {
        toast.error("something went wrong while fetching data")
        throw e
    }
}

export const createResidency=async(data,token)=>{
    try {
        await api.post(`/residency/create`,
        {
            data,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        },
        )
    } catch (e) {
        toast.error("something went wrong while uploading data")
        throw e
    }
} 