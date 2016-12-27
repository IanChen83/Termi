import { Router } from 'express';

import commandRouter from './command';

const router = new Router();

router.use('/commands', commandRouter);

export default router;
