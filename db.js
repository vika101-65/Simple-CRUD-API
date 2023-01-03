const { v4: uuidv4 } = require('uuid');

const users = [];

function createUser (user) {
  const { username, age, hobbies } = user;
  const data = {
    id: uuidv4(),
    username,
    age,
    hobbies
  }; 
  users.push(data);
  return JSON.stringify(data);
};

function getUsers () {
  return JSON.stringify(users);
};

function getOneUser (id) { 
  const user = users.find(elem => elem.id === id);
  return user;
};

function changeUser (id, newData) {
     users.forEach((elem, index) => {
      if (elem.id === id) {
        users[index] = {
          ...elem,
          ...newData,
          id
        }
      }
    })
};

function removeUser (id) {
  users.forEach((elem, index) => {
    if (elem.id === id) {
     users.splice(index, 1);
    }
  })
};

module.exports = {
  createUser,
  getOneUser,
  getUsers,
  changeUser,
  removeUser
}


