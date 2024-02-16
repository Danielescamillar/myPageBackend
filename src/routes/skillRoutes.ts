// src/routes/skillRoutes.ts
import express from 'express';
import * as skillController from '../controllers/skillController';

const router = express.Router();

router.get('/', skillController.getAllSkills);
router.get('/:id', skillController.getSkillById);
router.post('/', skillController.createSkillByBody);

export default router;
