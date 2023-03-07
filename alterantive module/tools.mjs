const languages = [{no:"norsk"}, {en:"english"}];
const Dictionary = (await import("./languages.json", {assert:{type:"json"}}))["default"];

let language = "no";

let UITranslateElements = [];
let attribute = "";

let elementsAndAttr = new Set();

function translate(translateElements, attributeToSet) {
    elementsAndAttr.push({attr:attributeToSet, elements:translateElements});
    for (const element of translateElements) {
        element[attributeToSet] = Dictionary[language][element.getAttribute("data-language-key")];
    };
};

function setLanguage(lan) {
    language = lan;

    for(let pair of elementsAndAttr){
        translateElements(pair.elements, pair.attr);
    };
};

export {translate as default, setLanguage};