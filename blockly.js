const Blockly = require('./dist/blockly_compressed');

Blockly.Msg = Object.assign(Blockly.Msg, require('./dist/i18n/en'));
Blockly.Blocks = Object.assign(Blockly.Blocks, require('./dist/blocks_compressed')(Blockly));
Blockly.JavaScript = require('./dist/javascript_compressed')(Blockly);

module.exports = Blockly;
