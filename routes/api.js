'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const locale = req.body.locale
      const text = req.body.text
      
      // checks if fields missing
      if (!locale || text == undefined) {
        res.json({ error: 'Required field(s) missing' })
        return
      }
      // checks if string is missing
      if (text=="") {
        res.json({ error: 'No text to translate' })
        return
      }

      // checks if the locale is brit-US or US-brit
      if(locale != "american-to-british" && locale != "british-to-american") {
        res.json({ error: 'Invalid value for locale field' })
        return
      }
      
      let translation = "";

      if (locale=="american-to-british") {
        translation = translator.americantoBritish(text)
      } else if (locale=="british-to-american") {
        translation = translator.britishtoAmerican(text)
      }


      if (translation == text || !translation) {
        res.json({text, translation: 'Everything looks good to me!'})
      } else {
        res.json({text, translation})
      }
      
    });
};
