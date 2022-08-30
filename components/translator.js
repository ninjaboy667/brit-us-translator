const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    constructor () {
        // capitilizes the first letter in a string
        this.capLetter =  function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
    }



    // this function converts american text to british // 
    americantoBritish(text) {

        // maps the dictionary to a very long regex
        let re = new RegExp(Object.keys(americanToBritishSpelling).join("|"),"gi"); 
        let regexAmerican = new RegExp(Object.keys(americanOnly).join("|"),"gi"); 
        let timeRegex = /([12]?[0-9])(:)([1-5][0-9])/g
        let titlesRegex = new RegExp(Object.keys(americanToBritishTitles).join("|"),"gi"); 

        // the regex is mapped to an equally long tranlation dictionary ... //
        let newtext = text.replace(re, function(matched){
            return '<span class="highlight">' + americanToBritishSpelling[matched.toLowerCase()]+'</span>';
        });

        // replace using American only js //
        newtext = newtext.replace(regexAmerican, function(matched){
            return '<span class="highlight">' + americanOnly[matched.toLowerCase()]+'</span>';
        });

        // replace american titles to british titles //

        newtext = newtext.replace(titlesRegex, function(matched){
            // ensures title is uppercase //
            let x = americanToBritishTitles[matched.toLowerCase()];
            let y = x.charAt(0).toUpperCase()+x.slice(1);
            return '<span class="highlight">' + y +'</span>';
        });

        // replace all american times to british times
        newtext = newtext.replace(timeRegex,'<span class="highlight">$1.$3</span>')

        newtext = this.capLetter(newtext)

        return newtext
    }

    // this function converts text british to american //
    britishtoAmerican(text) {
        // swap key values with american to british spelling //
        let britishtoAmericanSpelling = {};
        Object.keys(americanToBritishSpelling).map(key=>{britishtoAmericanSpelling[americanToBritishSpelling[key]] = key;
        })

        // swap key values with maerican to british titles //
        let britToUsTitles = {}
        Object.keys(americanToBritishTitles).map(key=>{britToUsTitles[americanToBritishTitles[key]] = key;
        })

        // create regexes
        let timeRegex = /([12]?[0-9])(.)([1-5][0-9])/g
        let re = new RegExp(Object.keys(britishtoAmericanSpelling).join("|"),"gi"); 
        let regexBritish = new RegExp(Object.keys(britishOnly).join("|"),"gi"); 
        let titlesRegex = new RegExp(Object.keys(britToUsTitles).join("|"),"gi"); 

        // the regex is mapped to an equally long tranlation dictionary ... //
        let newtext = text.replace(re, function(matched){
            return '<span class="highlight">' + britishtoAmericanSpelling[matched.toLowerCase()]+'</span>';
        });

         // replace using british only js //
         newtext = newtext.replace(regexBritish, function(matched){
            return '<span class="highlight">' + britishOnly[matched.toLowerCase()]+'</span>';
        });

        // replace british titles to america titles //
        newtext = newtext.replace(titlesRegex, function(matched){
                // ensures title is uppercase //
            let x = britToUsTitles[matched.toLowerCase()];
            let y = x.charAt(0).toUpperCase()+x.slice(1);
            return '<span class="highlight">' + y +'</span>';
        });


        // replace all british times to american times //
        newtext = newtext.replace(timeRegex,'<span class="highlight">$1:$3</span>');

        newtext = this.capLetter(newtext)


        return newtext
    }

}

module.exports = Translator;