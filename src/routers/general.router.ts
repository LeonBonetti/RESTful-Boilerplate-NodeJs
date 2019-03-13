import { Router } from 'express';
import * as controller from '../controllers/general.controller';

const router = Router();

router.post('/', controller.BaseController.validations, controller.BaseController.handler);

export default router;
