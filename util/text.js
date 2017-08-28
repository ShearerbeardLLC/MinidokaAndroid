import locale from 'react-native-locale-detector';
import text from "../text/data.json";
import textJP from '../text/data_JA.json';
import textSP from '../text/data_SP.json';

let textForLocal;

switch(locale) {
  case 'ja_JP':
    textForLocal = textJP;
    break;
  case 'es_MX':
    textForLocal = textSP;
    break;
  default:
    textForLocal = text;
}

export default textForLocal;
