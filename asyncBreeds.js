
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};


const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) 
};

module.exports = breedDetailsFromFile;