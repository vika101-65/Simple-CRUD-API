function checkRequiredFields (obg) {
  const { username, age, hobbies } = obg;

  if ( username && age && hobbies) {
     if (typeof username === 'string' && typeof age === 'number' && Array.isArray(hobbies)) {
      return hobbies.length === 0 ? 
        true : 
        hobbies.reduce((acum, elem) => {
         
          if (typeof elem !== 'string') {
            return false;
          };
           return acum;
        }, true)
     }
  }
}

module.exports = {
  checkRequiredFields
}