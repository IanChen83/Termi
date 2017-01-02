import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import marked from 'marked';
import spawnargs from 'spawn-args';

const spawn = require('child_process').spawn;

const commandRouter = new Router();
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
});

commandRouter.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

commandRouter.get('/man/:command', (req, res) => {
    const command = req.params.command;

    if(command !== 'ls' && command !== 'find') {
        //res.json({ status: 'failed', description: `Requst ${command} but command not supported.` });
        //return;
    }
    const file = path.join(__dirname, '../../study', `${command}.md`);

    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            res.json({ status: 'failed', description: err });
            return;
        }
        res.json({ status: 'ok', data: marked(data) });
    });
});

commandRouter.post('/run', (req, res) => {
    const { command, selectOptions } = req.body;

    if(command !== 'ls' && command !== 'find') {
        //res.json({ status: 'failed', description: `Requst ${command} but command not supported.` });
        //return;
    }

    console.log(command, selectOptions);
    const options = spawnargs(Object.values(selectOptions).filter(x => x !== '').join(' '));
    options.push('--time-style=+%y/%m/%d');
    const comm = options.length === 0 ? spawn(command) : spawn(command, options);

    comm.stdout.on('data', (data) => {
        console.log(data.toString());
        res.json({ status: 'ok', data: data.toString() });
    });

    comm.stderr.on('data', (data) => {
        console.log(data.toString());
    });
});

export default commandRouter;
