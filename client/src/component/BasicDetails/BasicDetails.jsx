import React from 'react'
import { validateString } from '../../utils/common'
import { useForm } from "@mantine/form";
import { Box, NumberInput, TextInput, Group, Button } from '@mantine/core';
import { Form } from 'react-router-dom';
import "./BasicDetails.scss"

const BasicDetails = ({ prevStep, nextStep, propertyDetail, setPropertyDetail }) => {

    const form = useForm({
        initialValue: {
            title: propertyDetail.title,
            description: propertyDetail.description,
            price: propertyDetail.price,
        },
        validate: {
            title: (value) => validateString(value),
            description: (value) => validateString(value),
            price: (value) => value < 100 ? "Must be greater than 99 dollars" : null,
        },
    })

    const { title, description, price } = form.values

    const handleSubmit = () => {
        const { hasError } = form.validate()
        if (!hasError) {
            setPropertyDetail((prev) => ({ ...prev, title, description, price }))
            nextStep()
        }
    }


    return (
        <Box className="box" mx="auto" my="md">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}
            >
                <TextInput
                    withAsterisk
                    label="title"
                    placeholder='Property Name'
                    my="md"
                    {...form.getInputProps("title")}
                />

                <TextInput
                    withAsterisk
                    label="Description"
                    placeholder='Property Description'
                    my="md"
                    {...form.getInputProps("description")}
                />

                <NumberInput
                    withAsterisk
                    label="Price"
                    placeholder='$ 2000'
                    min={0}
                    my="md"
                    {...form.getInputProps("price")}
                />

                <Group position="center" mt={"xl"}>
                    <Button type="submit" variant="default" onClick={prevStep}>Back</Button>
                    <Button type="submit">Next</Button>
                </Group>
            </form>
        </Box>
    )
}

export default BasicDetails
