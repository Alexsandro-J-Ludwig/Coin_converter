import Router from "express"
import {getCoin, getRated} from "../controller/apiController.js"

const routes = Router();

routes.get("/api", getCoin);
routes.get("/rate", getRated);  

export default routes