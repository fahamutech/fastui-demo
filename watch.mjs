import {watch} from 'node:fs'
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {exec} from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

watch(join(__dirname, 'src', 'blueprints'), {recursive: true}, (event, filename) => {
    if (!`${filename}`.endsWith('.yml') || `${filename}`.endsWith('~')) {
        return;
    }
    const file = `./src/blueprints/${filename}`;
    exec(`fastui specs build ${file}`, {
        cwd: __dirname
    }, (error, stdout, stderr) => {
    });
});
