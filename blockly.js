const Blockly = require('./build/blockly_compressed');

Blockly.Msg = Object.assign(Blockly.Msg, require('./build/i18n/en'));
Blockly.Blocks = Object.assign(Blockly.Blocks, require('./build/blocks_compressed')(Blockly));
Blockly.JavaScript = require('./build/javascript_compressed')(Blockly);

module.exports = Blockly;
