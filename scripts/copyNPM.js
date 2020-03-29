let shell = require('shelljs');

const libName = 'ui-panel';
const path = `../${libName}/`;

shell.rm('-rf', `${path}*`);

shell.cp('-R', 'package.json', `${path}`);
shell.cp('-R', 'lib', `${path}lib`);
//shell.cp('-R', 'src/typings.d.ts', `lib`);
