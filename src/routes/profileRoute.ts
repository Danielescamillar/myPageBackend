// src/routes/profileRoutes.ts
import express from 'express';
import * as profileController from '../controllers/profileController';

const router = express.Router();

router.get('/', profileController.getProfile);
router.post('/', profileController.createProfile);

export default router;
