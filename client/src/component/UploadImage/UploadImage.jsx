import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai"
import { Button, Group} from "@mantine/core";
import "./UploadImage.scss"

const UploadImage = ({ prevStep, nextStep, propertyDetail, setPropertyDetail }) => {

    const [imageUrl, setImageUrl] = useState(propertyDetail.image)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()


    const handleNext=()=>{
        setPropertyDetail((prev)=>({...prev,image:imageUrl}))
        nextStep()
    }

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dy5ucwypq",
                uploadPreset: "a0jg9ctn",
                maxFiles: 1
            },
            (error, result) => {
                if (result.event === "success") {
                    setImageUrl(result.info.secure_url)
                }
            }
        )
    }, [])


    return (
        <div className="flexColCenter upload_Wrapper">
            {
                !imageUrl ? (
                    <div className="flexCenter uploadZone"
                        onClick={() => widgetRef.current?.open()}
                    >
                        <AiOutlineCloudUpload size={50} color='gray' />
                        <span>Upload Image</span>
                    </div>
                ) : (
                    <div className="uploadImage"
                        onClick={() => widgetRef.current?.open()}
                    >
                        <img src={imageUrl} alt="" />
                    </div>
                )
            }

            <Group position="center" mt={"xl"} style={{paddingBottom:"2rem"}}>
                <Button type="submit" variant="default" onClick={prevStep}>Back</Button>
                <Button type="submit" onClick={handleNext} disabled={!imageUrl}>Next</Button>
            </Group>
        </div>
    )
}

export default UploadImage
