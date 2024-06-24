import {watch} from 'node:fs'
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {exec} from 'node:child_process';
import {writeFile} from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getContent(componentFile, componentName) {
    return `
import {${componentName}} from "${componentFile}";

export function App() {
    return (
        <>
            <${componentName}/>
        </>
    );
}

export default App;`;
}

function firstUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getFileName(path) {
    return path.split('/').pop().replace('.yml', '');
}

function snakeToCamel(str) {
    return `${str}`
        .replace(/_([a-z])/ig, (_, letter) => letter.toUpperCase());
}

watch(join(__dirname, 'src', 'blueprints'), {recursive: true}, (event, filename) => {
    if (!`${filename}`.endsWith('.yml') || `${filename}`.endsWith('~')) {
        return;
    }
    const file = `./src/blueprints/${filename}`;
    const componentFile = `./${filename}`.replace('.yml', '.jsx');
    const componentName = firstUpperCase(snakeToCamel(getFileName(file)));

    // console.log(file, '------')
    exec(`fastui specs build ${file}`, {
        cwd: __dirname
    }, (error, stdout, stderr) => {
        //if (!error) {
          //  writeFile(`./src/App.jsx`, getContent(componentFile, componentName))
            //    .catch(console.log);
        //}
    });
});
