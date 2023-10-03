import { useContext, useState } from "react";
import { Modal, MantineProvider, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext";
import { bookVisit } from "../../utils/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModel = ({ opened, setModeOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetail: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("Your have successfully booked your visit.", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setModeOpened(false),
  });

  return (
    <>
      <MantineProvider>
        <Modal
          onClose={() => setModeOpened(false)}
          opened={opened}
          title="Select your date of visit"
          centered
        >
          <div className="flexColCenter" style={{gap:"1rem"}}>
            <DatePicker onChange={setValue} minDate={new Date()} />
            <Button disabled={!value || isLoading} onClick={() => mutate()}>
              Book visit
            </Button>
          </div>
        </Modal>
      </MantineProvider>
    </>
  );
};

export default BookingModel;
