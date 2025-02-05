import express from 'express';
import upload from '../Helpers/multer.js';
import { addStudent, getStudent } from '../Controllers/Student-Controller.js';

const router = express.Router();



router.get('/get', getStudent);
router.post('/add', upload.single('file'), addStudent);

export default router;
