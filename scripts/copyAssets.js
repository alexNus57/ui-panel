let shell = require('shelljs');

shell.rm('-rf', './lib/assets');
shell.mkdir('-p', './lib/assets');
shell.cp('-R', './src/assets/*', `./lib/assets/`);

//shell.rm('-rf', './lib.es2015/assets');
//shell.mkdir('-p', './lib.es2015/assets');
//shell.cp('-R', './src/assets/*', `./lib.es2015/assets/`);
