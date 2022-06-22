import express from "express"
import clientRouter from "./clientRouter.js"
import userSessionsRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import driversRouter from "./api/v1/driversRouter.js"

const rootRouter = new express.Router()
rootRouter.use("/", clientRouter)

rootRouter.use("/api/v1/user-sessions", userSessionsRouter)
rootRouter.use("/api/v1/users", usersRouter)
rootRouter.use("/api/v1/drivers", driversRouter)

export default rootRouter
