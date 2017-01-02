import { Router } from 'express';

import commandRouter from './command';
import optionRouter from './option';

const router = new Router();

router.use('/commands', commandRouter);
router.use('/options', optionRouter);

export default router;
