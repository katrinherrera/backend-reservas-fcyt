import express from 'express'
import { registerDAUserController, singleDAUserController, DAUserControlller, updateDAUserController } from '../controllers/DAUsersController.js'
//router object
const router = express.Router()

//routing
//REGISTER METHOD POST
router.post('/register',registerDAUserController)
router.get('/user',DAUserControlller)
router.get('/singleuser/:slug', singleDAUserController);
router.put('/dauserupd/:id', updateDAUserController);

export default router