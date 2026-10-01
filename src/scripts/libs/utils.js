const browsersUAList = [
  { ua: 'Firefox', name: 'Firefox' },
  { ua: 'OPR', name: 'Opera' },
  { ua: 'Edg', name: 'Edge' },
  { ua: 'Chrome', name: 'Chrome' },
];

export const getBrowser = () => {
  try {
    const ua = globalThis.navigator.userAgent;
    const browser = browsersUAList.find(
      (browser) => ua.indexOf(browser.ua) >= 0
    );
    return browser ? browser.name : '';
  } catch {
    return null;
  }
};

export const getVersion = () => {
  try {
    return (chrome.runtime.getManifest() || {}).version;
  } catch {
    return null;
  }
};

export const getFeedbackFormLink = () => {
  return 'https://docs.google.com/forms/d/e/1FAIpQLSe5lenJCbDFgJKwYuK_7U_s5wN3D78CEP5LYf2lghWwoE9IyA/viewform';
};

const privacyPolicyLinks = {
  Firefox:
    'https://addons.mozilla.org/firefox/addon/youtube-ambientlight/privacy/',
};
export const getPrivacyPolicyLink = () => {
  const browser = getBrowser();
  return (
    privacyPolicyLinks[browser] ||
    'https://github.com/WesselKroos/youtube-ambilight#privacy--security'
  );
};
