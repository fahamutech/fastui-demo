import {watch} from 'node:fs'
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {exec} from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

watch(join(__dirname, 'src', 'blueprints'), {recursive: true}, (event, filename) => {
    // console.log(filename);
    // console.log(event);
    // return;
    if (!`${filename}`.endsWith('.yml') || `${filename}`.endsWith('~')) {
        return;
    }
    const file = `./src/blueprints/${filename}`;
    // const fileParts = file.split('/');//.filter(x => !x.includes('.yml'));
    // console.log(file);
    const a = exec(`fastui specs build ${file}`, {
        cwd: __dirname
    });
    // console.log(a.toString());
});
