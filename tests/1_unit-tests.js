const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()


suite('Unit Tests', () => {

    // american to british //
    suite('American to British English', function(){

        // mangos
        test("Mangoes are my favorite fruit. Mangoes are my favourite fruit.", function(done) {
            const input = "Mangoes are my favorite fruit.";
            const output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // yogurt
        test("I ate yogurt for breakfast. I ate yoghurt for breakfast.", function(done) {
            const input = "I ate yogurt for breakfast.";
            const output = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // condo flat
        test("We had a party at my friend's condo. We had a party at my friend's flat.", function(done) {
            const input = "We had a party at my friend's condo.";
            const output = `We had a party at my friend's <span class="highlight">flat</span>.`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // trash rubish
        test("Can you toss this in the trashcan for me? Can you toss this in the rubbishcan for me?", function(done) {
            const input = "Can you toss this in the trashcan for me?";
            const output = `Can you toss this in the <span class="highlight">rubbish</span>can for me?`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // trash rubish
        test("The parking lot was full. The car park was full.", function(done) {
            const input = "The parking lot was full.";
            const output = `The <span class="highlight">car park</span> was full.`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // rube golber machine heath robinson device
        test("Like a high tech Rube Goldberg machine. Like a high tech Heath Robinson device.", function(done) {
            const input = "Like a high tech Rube Goldberg machine.";
            const output = `Like a high tech <span class="highlight">Heath Robinson device</span>.`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // To play hooky means to skip class or work.
        test("To play hooky means to skip class or work.", function(done) {
            const input = "To play hooky means to skip class or work.";
            const output = `To <span class="highlight">bunk off</span> means to skip class or work.`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // No Mr. Bond, I expect you to die.
        test("No Mr. Bond, I expect you to die.", function(done) {
            const input = "No Mr. Bond, I expect you to die.";
            const output = `No <span class="highlight">Mr</span> Bond, I expect you to die.`;
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Dr. Grosh will see you now.
        test("Dr. Grosh will see you now.", function(done) {
            const input = "Dr. Grosh will see you now.";
            const output = `<span class="highlight">Dr</span> Grosh will see you now.`;
            const translationType = "american-to-british";

            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Dr. Grosh will see you now.
        test("Lunch is at 12:15 today.", function(done) {
            const input = "Lunch is at 12:15 today.";
            const output = `Lunch is at <span class="highlight">12.15</span> today.`;
            const translationType = "american-to-british";

            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });
    })

    // british to american //
    suite('American to British English', function(){

        // We watched the footie match for a while.
        test("We watched the footie match for a while.", function(done) {
            const input = "We watched the footie match for a while.";
            const output = `We watched the <span class="highlight">soccer</span> match for a while.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Paracetamol takes up to an hour to work.
        test("Paracetamol takes up to an hour to work.", function(done) {
            const input = "Paracetamol takes up to an hour to work.";
            const output = `<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // First, caramelise the onions.
        test("First, caramelise the onions.", function(done) {
            const input = "First, caramelise the onions.";
            const output = `First, <span class="highlight">caramelize</span> the onions.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // I spent the bank holiday at the funfair.
        test("I spent the bank holiday at the funfair.", function(done) {
            const input = "I spent the bank holiday at the funfair.";
            const output = `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

         // I had a bicky then went to the chippy.
         test("I had a bicky then went to the chippy.", function(done) {
            const input = "I had a bicky then went to the chippy.";
            const output = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // I've just got bits and bobs in my bum bag.
        test("I've just got bits and bobs in my bum bag.", function(done) {
            const input = "I've just got bits and bobs in my bum bag.";
            const output = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // The car boot sale at Boxted Airfield was called off.
        test("The car boot sale at Boxted Airfield was called off.", function(done) {
            const input = "The car boot sale at Boxted Airfield was called off.";
            const output = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Have you met Mrs Kalyani?
        test("Have you met Mrs Kalyani?", function(done) {
            const input = "Have you met Mrs Kalyani?";
            const output = `Have you met <span class="highlight">Mrs.</span> Kalyani?`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Prof Joyner of King's College, London.
        test("Prof Joyner of King's College, London.", function(done) {
            const input = "Prof Joyner of King's College, London.";
            const output = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // Prof Joyner of King's College, London.
        test("Tea time is usually around 4 or 4.30.", function(done) {
            const input = "Tea time is usually around 4 or 4.30.";
            const output = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });
    })

    // british to american //
    suite('Highlight testing (repeat a few)', function(){

        // highlight mangos
        test("highlight: Mangoes are my favorite fruit.", function(done) {
            const input = "Mangoes are my favorite fruit.";
            const output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
            const translationType = "american-to-british";

            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // highlight yogurt
        test("highlight: I ate yogurt for breakfast.", function(done) {
            const input = "I ate yogurt for breakfast.";
            const output = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
            const translationType = "american-to-british";
    
            const translation = translator.americantoBritish(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // highlight: We watched the footie match for a while.
        test("highlight: We watched the footie match for a while.", function(done) {
            const input = "We watched the footie match for a while.";
            const output = `We watched the <span class="highlight">soccer</span> match for a while.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });

        // highlight: Paracetamol takes up to an hour to work.
        test("highlight: Paracetamol takes up to an hour to work.", function(done) {
            const input = "Paracetamol takes up to an hour to work.";
            const output = `<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.`;
            const translationType = "american-to-british";

            const translation = translator.britishtoAmerican(input, translationType);
            assert.strictEqual(translation, output);
            done();
        });



    })



});
