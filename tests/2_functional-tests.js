const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    // test POST requests
    suite('Test POST requests to /api/translate', function() {

        // text and locale in correct place // 
        test('Translation with text and locale fields', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit.",
                    locale: "american-to-british"
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.translation,'Mangoes are my <span class="highlight">favourite</span> fruit.')
                })
                done()
        })

        // text and invalid locale // 
        test('Translation with text and invalid locale field', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit.",
                    locale: "invalid"
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.error,'Invalid value for locale field')
                })
                done()
        })

       

        // Translation with missing text field: // 
        test('Translation with missing text field:', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    locale: "american-to-british"
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.error,'Required field(s) missing')
                })
                done()
        })

         // text but no locale // 
         test('Translation with missing locale field', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit.",
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.error,'Required field(s) missing')
                })
                done()
        })

        // text but string is empty // 
        test('Translation with missing locale field', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "",
                    locale: "american-to-british"
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.error,'No text to translate')
                })
                done()
        })

        // text that does not need translated // 
        test('Translation with text that needs no translation', function(done){
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "This should be fine.",
                    locale: "american-to-british"
                })
                .end(function (err,res){
                    assert.equal(res.status,200)
                    assert.equal(res.body.translation,'Everything looks good to me!')
                })
                done()
        })

    })



});
