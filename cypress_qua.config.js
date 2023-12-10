
const cucumber = require('cypress-cucumber-preprocessor').default;



module.exports = {

  e2e: {
    url: "https://fr.fonciaqua.com/",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      
    },
   
  },  
};
