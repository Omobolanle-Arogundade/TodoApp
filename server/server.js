const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo.model');
const {User} = require('./models/user.model');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    console.log(req.body);

    // if(req.body && req.body.text){
        const newTodo = new Todo({
            text: req.body.text
        });
    // }



    newTodo.save().then(data => {
        res.status(200)
        res.send(data);
    }, e=> {
        res.status(400);
        res.send(e)
    })
})


app.listen(3000, ()=> {
    console.log('Started on port 3000');
})


module.exports = {
    app
};
