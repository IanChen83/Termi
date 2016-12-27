import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

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

commandRouter.get('/:command', (req, res) => {
    const command = req.params.command;

    if(command !== 'ls' && command !== 'find') {
        res.json({ status: 'failed', description: `Requst ${command} but command not supported.` });
        return;
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

export default commandRouter;
