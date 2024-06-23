import express from 'express'
import {registerBookController,bookControlller,singleBookController, mostReservedRoomController, teacherWithMostReservations} from '../controllers/bookController.js'

//router object
const router = express.Router()

//routing
//REGISTER METHOD POST
router.post('/register',registerBookController)
router.get('/books',bookControlller)
router.get("/single-book/:slug", singleBookController);

router.get('/most-reserved-room/:startDate/:endDate', mostReservedRoomController);
router.get('/most-reserved-teacher/:startDate/:endDate', teacherWithMostReservations)

export default router