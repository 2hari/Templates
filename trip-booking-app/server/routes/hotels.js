import express from "express"
import {
  countByCity,
  countByType,
  createHotel,
  getHotels,
} from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/middleware.js"
const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)

//GET ALL
router.get("/", getHotels)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router
