"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  // Hello
  "BonjourIntent": function() {
    this.response.speak("Bonjour, Darkkrye"); 
    this.emit(':responseReady');
  },
  "HelloIntent": function () {
    this.response.speak("Hello, Darkkrye"); 
    this.emit(':responseReady');
  },
  
  // Launch
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to Codecademy. What do you think is Codecademy's most popular language?").listen("Tell me what you think is Codecademy's most popular language.");
    this.emit(':responseReady');
  },

  'LanguageIntent': function () {
    this.response.speak("Python is our most popular language.");
    this.emit(':responseReady');
  },
  
  // Favorite Language
  "myFavoriteLanguageIntent": function() {
    this.response.speak("Your favorite language is Swift");
    this.emit(':responseReady');
  },
  "monlangageFavorisIntent": function() {
    this.response.speak("Ton langage préféré est le Swift");
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
