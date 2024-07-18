
import dotenv from "dotenv";
dotenv.config();
import express,{Express} from "express"
import cors from "cors";
const app:Express = express();
import { router as twilioRoutes } from "./router/twilioRouter";

const port = process.env.APP_PORT

app.use(cors())
app.use(express.json())
app.use("/api/twilio",twilioRoutes);


app.listen(port,()=>{
    console.log("running on 4000");
})



