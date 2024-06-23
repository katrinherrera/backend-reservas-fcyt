import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import spaceRoute from './routes/spaceRoute.js'
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'
import periodRoute from './routes/periodRoute.js'
import DAUserRoute from './routes/DAUserRoute.js'
//configure env
dotenv.config();



//databse config
connectDB();
//rest object 
const app = express()

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/auth/', authRoute)
app.use('/api/space/', spaceRoute)
app.use('/api/book/', bookRoute)
app.use('/api/period/', periodRoute)
app.use('/api/user/', DAUserRoute)

//rest api
app.get('/',(req,res) =>{
    res.send({
        message: 'welcome to backTIS app'

    })
} )
//PORT
const PORT = process.env.PORT || 8080;

//run listen 
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    );
  });
