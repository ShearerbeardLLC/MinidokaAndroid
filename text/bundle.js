
var mdLinkRegex = /(\[(.*?)\s?]\s?\()(.+?)(\))/g;
var fs = require('fs');
var path = require('path');

var enPath = path.join(__dirname, "./EN");
var spPath= path.join(__dirname, "./SP");
var jaPath = path.join(__dirname, "./JA");

function mapFiles(txtPath) {
  return fs.readdirSync(txtPath).map(function(file) {
    return [file.replace(".txt", ""),
      fs.readFileSync(path.join(txtPath, file), 'utf8')];
  })
  .reduce(function(coll, file) {
    coll[file[0]] = file[1].replace(
      mdLinkRegex,
      (fst, snd, title, text) => encodeURI(`http://glossary/${ title }/${ text }/`)
    );
    return coll;
  }, {});
}

function errorHandler(err) {
  if(err) {
    console.error("ERROR", err);
  }
}

function serializeFiles(txtPath, output) {
  var map = mapFiles(txtPath);
  var serializedMap = JSON.stringify(map);
  fs.writeFile(path.join(__dirname, output), serializedMap, errorHandler);
}

serializeFiles(enPath, "./data.json");
serializeFiles(spPath, "./data_SP.json");
serializeFiles(jaPath, "./data_JA.json");
