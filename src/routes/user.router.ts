import { Router } from "express";
import { UserRepo } from "../repos/user.repo";
import HttpStatusCodes from "../constants/HttpStatusCodes";
// const validate = jetValidator();
const router = Router();

router.get("/get", async (req, res) => {
    let { getAllUser } = req.query;
    const users = await UserRepo.getAll();
    console.log("users",users);
    res.status(HttpStatusCodes.OK).json(users);
});

export default router;