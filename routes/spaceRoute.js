import express from 'express'
import {registerSpaceController,spaceControlller,singleSpaceController, updateSpaceController, deleteSpaceController} from '../controllers/spaceController.js'


//router object
const router = express.Router()

//routing
//REGISTER METHOD POST
router.post('/register',registerSpaceController)
router.get('/spaces',spaceControlller)
router.get("/singlespace/:slug", singleSpaceController);
router.put('/spaceupd/:id', updateSpaceController);
router.delete("/spacedel/:id", deleteSpaceController);

export default router