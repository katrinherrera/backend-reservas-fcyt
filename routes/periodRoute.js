import express from 'express'
import {registerPeriodController,periodControlller,singlePeriodController,updatePeriodController, deletePeriodController} from '../controllers/periodController.js'


//router object
const router = express.Router()

//routing
//REGISTER METHOD POST
router.post('/register',registerPeriodController)
router.get('/period',periodControlller)
router.get('/singleperiod/:slug', singlePeriodController);
router.put('/periodupd/:id', updatePeriodController);
router.delete("/perioddel/:id", deletePeriodController);

export default router