import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults, isAuth } from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(paramValidation.list, validateResults, methods.list) // TODO Add isAuth,
  .post(isAuth, paramValidation.create, validateResults, methods.create);
router
  .route('/:id')
  .get(
    isAuth,
    paramValidation.getPostById,
    validateResults,
    methods.getPostById,
  );

export default router;
