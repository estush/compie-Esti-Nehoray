import express from 'express';
import { chatWithOpenAI, check } from '../controllers/openAi.controller.js'; // ייבוא של פונקציה מתוך ה-controller

const router = express.Router();

// // הגדרת ניתוב לשליחת שאלה ל-OpenAI
router.post('/chat', chatWithOpenAI);
router.get('/check', check);

export default router;
