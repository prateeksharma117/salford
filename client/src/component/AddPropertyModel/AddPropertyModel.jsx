import { Container, MantineProvider, Modal,Stepper } from "@mantine/core";
import { useState } from "react";
import {AddLocation,BasicDetails,Facilities,UploadImage} from "../../component";
import { useAuth0 } from "@auth0/auth0-react";

const AddPropertyModel = ({ opened, setModelOpened }) => {
    const {user}=useAuth0()
    const [active, setActive] = useState(0)
    const [propertyDetail, setPropertyDetail] = useState({
        title:"",
        description:"",
        price:0,
        country:"",
        city:"",
        address:"",
        image:"",
        facilities:{
            bedrooms:0,
            parking:0,
            bathrooms:0,
        },
        userEmail:user?.email,
    })

    const nextStep=()=>{
        setActive((current)=>(current<4?current+1:current))
    }

    const prevStep=()=>{
        setActive((current)=>(current>0?current-1:current))
    }



    return (
        <>
            <MantineProvider>
                <Modal
                    opened={opened}
                    onClose={() => setModelOpened(false)}
                    size={"90rem"}
                >
                    <Container h={"40rem"} w={"100%"}>
                        <Stepper
                            active={active}
                            onStepClick={setActive}
                            allowNextStepsSelect={false}
                        >
                            <Stepper.Step label="Location" description="Address">
                                <AddLocation
                                nextStep={nextStep}
                                propertyDetail={propertyDetail}
                                setPropertyDetail={setPropertyDetail}
                                />
                            </Stepper.Step>
                            <Stepper.Step label="Image" description="Upload">
                                <UploadImage
                                prevStep={prevStep}
                                nextStep={nextStep}
                                propertyDetail={propertyDetail}
                                setPropertyDetail={setPropertyDetail}
                                />
                            </Stepper.Step>
                            <Stepper.Step label="Basic" description="Details">
                                <BasicDetails
                                prevStep={prevStep}
                                nextStep={nextStep}
                                propertyDetail={propertyDetail}
                                setPropertyDetail={setPropertyDetail}
                                />
                            </Stepper.Step>
                            <Stepper.Step label="Final" description="Step">
                                <Facilities
                                prevStep={prevStep}
                                propertyDetail={propertyDetail}
                                setPropertyDetail={setPropertyDetail}
                                setModelOpened={setModelOpened}
                                setActiveStep={setActive}
                                />
                            </Stepper.Step>
                            <Stepper.Completed>
                                
                            </Stepper.Completed>
                        </Stepper>
                    </Container>
                </Modal>
            </MantineProvider>
        </>
    );
};

export default AddPropertyModel;
