import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './locales/en';
import fr from './locales/fr';

// i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, fr };
i18n.locale = 'fr';
// i18n.locale = Localization.locale;
export default i18n;
