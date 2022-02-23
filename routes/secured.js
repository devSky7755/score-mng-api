import express from "express";
import { addStudent, getStudents, updateScore, deleteStudent } from "../controllers/secured/student.js";

const securedRouter = express.Router();

securedRouter.get('/students', getStudents);
securedRouter.post('/students', addStudent);
securedRouter.put('/students/:id', updateScore);
securedRouter.delete('/students/:id', deleteStudent);

export default securedRouter;