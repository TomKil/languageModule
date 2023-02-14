import Dictionary from "../dictionary.mjs"

(function runTests(){
    testCreatingLanguageInterface();
    testSupportingLanguageFiles();
})();


function testCreatingLanguageInterface(){
    const dictionary = new Dictionary();
    test(dictionary != undefined, "Creating instance of Language support module");
}

function testSupportingLanguageFiles(){
    const languages = ["./lang/no.json", "./lang/en.json"];
    const dictionary = new Dictionary(...languages);
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}

function testLoadingLangaugeResources(){
    const languages = ["./lang/no.json", "./lang/en.json"];
    const dictionary = new Dictionary(...languages);
    dictionary.setLanguage("no");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}


function test(test, description){
    if(test){
        console.log(`SUCCESS ${description}`)
    } else{
        console.log(`FAIL ${description},  ${test}`)
    }
}