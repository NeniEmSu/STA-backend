const AccessControl = require('accesscontrol');

const accessControl = new AccessControl();

exports.roles = (function () {
  accessControl.grant('basic').readOwn('profile').updateOwn('profile').deleteOwn('profile');

  accessControl.grant('paid').extend('basic').readAny('question');

  accessControl
    .grant('admin')
    .extend('basic')
    .extend('paid')
    .updateAny('profile')
    .deleteAny('profile');

  return accessControl;
})();
