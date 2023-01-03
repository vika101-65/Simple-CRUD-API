const http = require('http');
const dotenv  = require('dotenv');
const { changeUser, createUser, getOneUser, getUsers, removeUser } = require('../db.js');
const { checkRequiredFields } = require('../checkField.js');
const { validate: uuidValidate } =require('uuid');

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  try {
    // console.log('metod',req.method); console.log('url', req.url); 
  res.setHeader('Content-Type', 'application/json');
  // console.log('id', req.url.split('/'));
  const arrUrl = req.url.split('/');

  if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(getUsers());
    return;
  } 
  else if (req.url === '/api/users' && req.method === 'POST') {
    req.on('data', (chunk) => {
      const data = JSON.parse(chunk); console.log('chunk', data); 

      if (checkRequiredFields(data)) {
        res.statusCode = 201;
        res.end(createUser(data));
        return;
      };

       res.statusCode = 400;
       res.end(JSON.stringify({message:"Body does not contain required fields"}));
       return;
    });
  } 
  else if (arrUrl[1] === 'api' && arrUrl[2] === 'users' &&  arrUrl[3] && req.method === 'GET') {
    const id = arrUrl[3];

    if(!uuidValidate(id)) {
      res.statusCode = 400;
      res.end(JSON.stringify({message: "UserId is invalid"}));
      return;
    };

    if(uuidValidate(id)) {
      const user = getOneUser(id);

      if (user) {
        res.statusCode = 200;
        res.end(JSON.stringify(user));
        return;
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({message:"Users doesn't exist"}));
        return;
      }  
    }
  }
  else if (arrUrl[1] === 'api' && arrUrl[2] === 'users' &&  arrUrl[3] && req.method === 'PUT') {
    const id = arrUrl[3];

    if(!uuidValidate(id)) {
      res.statusCode = 400;
      res.end(JSON.stringify({message:"UserId is invalid"}));
      return;
    };

    if(uuidValidate(id)) {
      const user = getOneUser(id);

      if (user) {
        res.statusCode = 200;

        req.on('data', (chunk) => {
          const data = JSON.parse(chunk);
          changeUser(id, data);
          res.end(JSON.stringify(getOneUser(id)));
          return;
        })
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({message:"Users doesn't exist"}));
        return;
      }  
    }
  }
  else if (arrUrl[1] === 'api' && arrUrl[2] === 'users' &&  arrUrl[3] && req.method === 'DELETE') {
    const id = arrUrl[3];

    if(!uuidValidate(id)) {
      res.statusCode = 400;
      res.end(JSON.stringify({message:"UserId is invalid"}));
      return;
    };

    if(uuidValidate(id)) {
      const user = getOneUser(id);

      if (user) {
        removeUser(id);
        res.statusCode = 204;
        res.end();
      } 
      else {
        res.statusCode = 404;
        res.end(JSON.stringify({message:"Users doesn't exist"}));
        return;
      }  
    }
  }
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({message:"Requests to non-existing endpoints"}));
    return;
  }
  } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({message:"The error comes from the server side"}));
      return;
  }
  
}
);
server.listen(PORT, ( ) => console.log(`Lisening PORT ${PORT}`));

module.exports = {server}