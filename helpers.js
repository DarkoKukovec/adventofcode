var crypto = require('crypto');

module.exports = {
  md5(data) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(data);
    return md5sum.digest('hex');
  }
};
