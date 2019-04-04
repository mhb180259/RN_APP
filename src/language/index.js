import I18n from 'react-native-i18n';
import DeviceInfo from 'react-native-device-info';
import en from './en';
import cn from './cn';

I18n.missingTranslation = () => {
  return 'undefined';
};
I18n.fallbacks = true;
const local = DeviceInfo.getDeviceLocale();
if (/^zh/.test(local)) {
  I18n.defaultLocale = 'cn';
} else {
  I18n.defaultLocale = 'en';
}
I18n.translations = {
  en,
  cn,
};

global.I18n = I18n;