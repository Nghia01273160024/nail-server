"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_repo_1 = require("../repos/user.repo");
const HttpStatusCodes_1 = __importDefault(require("../constants/HttpStatusCodes"));
// const validate = jetValidator();
const router = (0, express_1.Router)();
router.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { getAllUser } = req.query;
    const users = yield user_repo_1.UserRepo.getAll();
    console.log("users", users);
    res.status(HttpStatusCodes_1.default.OK).json(users);
}));
exports.default = router;
