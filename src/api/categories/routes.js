import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults } from '../../middlewares';

const router = express.Router();

router.route('/').get(paramValidation.list, validateResults, methods.list);

export default router;
