const fs = require('fs');

function build(path, file, codeStart, codeEnd) {
  let fd, data, utf = 'utf8';
  try {
    data = fs.readFileSync(`lib/${path}${file}.js`);
    fd = fs.openSync(`build/${path}${file}.js`, 'a');
    fs.appendFileSync(fd, codeStart, utf);
    fs.appendFileSync(fd, data, utf);
    fs.appendFileSync(fd, codeEnd, utf);
    if (path) {
      fs.readFile(`build/${path}${file}.js`, 'utf8', (err, data) => {
        if (err) return console.log(err);

        const result = data.replace(/goog\.[^\n]+/g, '');
        fs.writeFile(`build/${path}${file}.js`, result, 'utf8', (err) => {
          if (err) return console.log(err);
        });
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    if (fd !== undefined)
      fs.closeSync(fd);
  }
}

build(``, `blockly_compressed`, `module.exports = (function(){`, `Blockly.goog=goog;return Blockly;})()`);
build(``, `blocks_compressed`, `module.exports = function(Blockly){Blockly.Blocks={};`, `return Blockly.Blocks;}`);
build(``, `javascript_compressed`, `module.exports = function(Blockly){`, `return Blockly.JavaScript;}`);
build(`i18n/`, `en`, `var Blockly = {}; Blockly.Msg={};  module.exports = function(){`, `return Blockly.Msg;}`);
