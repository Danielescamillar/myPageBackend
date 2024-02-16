// src/routes/index.ts
import express from 'express';
import skillRoutes from './skillRoutes';
import profileRoutes from './profileRoute';
import experienceRoutes from './experienceRoute';

const router = express.Router();

router.use('/api/skills', skillRoutes);
router.use('/api/profile', profileRoutes);
router.use('/api/experience', experienceRoutes);

export default router;
