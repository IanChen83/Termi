import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const optionRouter = new Router();

optionRouter.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

optionRouter.get('/:command', (req, res) => {
    const command = req.params.command;

    if(command !== 'ls') {
        //res.json({ status: 'failed', description: `Requst ${command} but command not supported.` });
        //return;
    }
    try {
        const options = require(`../options/${command}`);
        res.json({ status: 'ok', options });
    } catch(e) {
        res.json({ status: 'failed', description: e });
    }
});

export default optionRouter;
