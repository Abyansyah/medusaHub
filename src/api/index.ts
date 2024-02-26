import { Router, json, urlencoded } from "express"; // Import json and urlencoded middleware
import configLoader from "@medusajs/medusa/dist/loaders/config"
import { 
  registerLoggedInUser,
} from "./middlewares/logged-in-user"
import 
  authenticate 
from "@medusajs/medusa/dist/api/middlewares/authenticate"
import * as cors from "cors"
import { registerSeller } from "../controllers/seller_controller"

export default function (rootDirectory: string) {
  const router = Router()
  const config = configLoader(rootDirectory)

  const adminCors = {
    origin: config.projectConfig.admin_cors.split(","),
    credentials: true,
  }
  
  router.use(json());
  router.use(urlencoded({ extended: true }));

  router.post("/seller/register", (req, res) => {
    registerSeller(req, res)
  })
  
  router.use(
    /\/admin\/[^(auth)].*/,
    cors(adminCors),
    authenticate(),
    registerLoggedInUser
  )

  return router
}