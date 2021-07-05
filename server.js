'use strict';

// create a variable to use express library
const express = require('express'); // npm i express
require('dotenv').config(); // npm i dotenv

const pokeData = require('./assets/poke.json')


// server has all of the properities and method of express
const server = express();

const PORT = process.env.PORT;


// localhost:3001/
server.get('/',(req,res)=>{
    res.status(200).send('home route')
})

// localhost:3001/test
server.get('/test',(request,response)=>{
    response.status(200).send('my server is working')
})

// localhost:3001/shoppingList
let myTargetList = ['shoes', 'bags', 'cat food'];
server.get('/shoppingList', (request, response) => {
  response.status(200).send(myTargetList);
});

//localhost:3001/getPokeInfo?pokeName=charmander
server.get('/getPokeInfo',(req,res)=>{
    console.log(req.query);
    let selectedPoke = pokeData.results.find (pokemon =>{
        if(pokemon.name == req.query.pokeName) {
            return pokemon
        }
    })
    res.status(200).send(selectedPoke);
})


// handle any route
// localhost:3001/ANY_ROUTE
server.get('*',(req,res)=>{
    res.status(404).send('NOT FOUND')
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})
