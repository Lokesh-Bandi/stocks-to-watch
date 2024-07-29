(function () {
  console.log('App Loader added');
  const params = new URLSearchParams(window.location.search);

  const getParamValue = (name) => {
    let val;
    try {
      val = params.get(name);
    } catch (e) {
      val = null;
      console.log('Unknown URL Param');
    }
    return val;
  };
  const userKey = 'admin';
  const passKey = 'passcode';
  sessionStorage.setItem(userKey, getParamValue('admin'));
  sessionStorage.setItem(passKey, getParamValue('passcode'));
})();
