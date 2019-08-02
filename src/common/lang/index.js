import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./en";
import zhLocale from "./zh";
import LangStorage from './../../helpers/lang'
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
// 按需引入Element
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: LangStorage.getLang('en'),  // 语言标识
  // set locale messages
  messages
});

// 配置Element的i18n
// Vue.use(Element, {
//   i18n: (key, value) => i18n.t(key, value)
// });
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n;
