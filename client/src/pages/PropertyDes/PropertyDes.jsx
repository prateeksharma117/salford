import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./PropertyDes.scss";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import { Heart, Map } from "../../component";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import { BookingModel } from "../../component";
import { useState, useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import { Button, MantineProvider } from "@mantine/core";
import { toast } from "react-toastify";

const PropertyDes = () => {
    const { user } = useAuth0();
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(-1)[0];
    const { data, isLoading, isError } = useQuery(["resd", id], () =>
        getProperty(id)
    );
    const [modeOpened, setModeOpened] = useState(false);
    const { validateLogin } = useAuthCheck();

    const {
        userDetail: { token, bookings },
        setUserDetails,
    } = useContext(UserDetailContext);

    const {mutate:cancelBooking,isLoading:cancelling}=useMutation({
        mutationFn:()=>removeBooking(id,user?.email,token),
        onSuccess:()=>{
            setUserDetails((prev)=>({
                ...prev,
                bookings:prev.bookings.filter((booking)=>booking?.id!==id)
            }))
            toast.success("Booking  cancelled",{position:"bottom-right"})
        }
    })

    if (isError) {
        return (
            <div className="wrapper">
                <span>Error while fetching data</span>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color="#4866ff"
                    aria-label="puff-loading"
                />
            </div>
        );
    }

    return (
        <>
            <div className="wrapper">
                <div className="flexColStart paddings innerWidth property_container">
                    <div className="like">
                        <Heart id={id}/>
                    </div>

                    <img src={data?.image} alt="image" />

                    <div className="flexCenter property_details">
                        {/* left */}
                        <div className="flexColStart left">
                            <div className="flexStart head">
                                <span className="primaryText">{data?.title}</span>
                                <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                                    ${data?.price}
                                </span>
                            </div>
                            <div className="flexStart facilities">
                                <div className="flexStart facility">
                                    <FaShower size={20} color="#142728" />
                                    <span>{data.facilities?.bathrooms} Bathrooms</span>
                                </div>
                                <div className="flexStart facility">
                                    <AiTwotoneCar size={20} color="#142728" />
                                    <span>{data.facilities?.parkings} Parkings</span>
                                </div>
                                <div className="flexStart facility">
                                    <MdMeetingRoom size={20} color="#142728" />
                                    <span>{data.facilities?.bedrooms} Room/s</span>
                                </div>
                            </div>
                            <span className="secondaryText" style={{ textAlign: "justify" }}>
                                {data?.description}
                            </span>
                            <div className="flexStart">
                                <MdLocationPin
                                    size={25}
                                    style={{ color: "#142728", gap: "1rem" }}
                                />
                                <span className="secondaryText">
                                    {data?.address}{" "}
                                    {data?.city}{" "}
                                    {data?.country}
                                </span>
                            </div>

                            {bookings?.map((booking) => booking.id).includes(id) ? (
                                <>
                                <MantineProvider>
                                    <Button variant="outline" w={"100%"} color="red" onClick={()=>cancelBooking()} disabled={cancelling}>
                                        <span>Cancel booking</span>
                                    </Button>
                                </MantineProvider>

                                <span>Your visit already booked for date {bookings?.filter((booking)=>booking?.id===id)[0].date} </span>
                                </>
                            ) : (
                                <button
                                    className="button"
                                    onClick={() => {
                                        validateLogin() && setModeOpened(true);
                                    }}
                                >
                                    Book your visit
                                </button>
                            )}

                            <BookingModel
                                opened={modeOpened}
                                setModeOpened={setModeOpened}
                                propertyId={id}
                                email={user?.email}
                            />
                        </div>

                        {/* right */}

                        <div className="flexColStart map">
                            <Map
                                address={data?.address}
                                city={data?.city}
                                country={data?.country}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyDes;
