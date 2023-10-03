import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js ";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const residency=await prisma.residency.create({
        data:{ title,
            description,
            price,
            address,
            city,
            country,
            facilities,
            image,
            owner:{connect:{email:userEmail}}
        },
    })
    res.send({message:"Residency created successfully",residency})
  } catch (e) {
    if (e.code ==='P2002') {
        throw new Error("A residency with address already is there")
    }
    throw new Error(e.message)
  }
});

export const getAllResidencies=asyncHandler(async(req,res)=>{
    const residencies=await prisma.residency.findMany({
        orderBy:{
            created_at:"desc",
        },
    })
    res.send(residencies)
})

export const getResidency=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try {
        const residency = await prisma.residency.findUnique({where:{id}})
        res.send(residency)
    } catch (e) {
        throw new Error(e.message)
    }
})