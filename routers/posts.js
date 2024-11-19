const express = require('express')

const router = express.Router()
const postsList = [
    { title: "0", content: "", img: "./public/images/ciambellone.jpeg", tags: ["", "", ""] },
    { title: "1", content: "", img: "./public/images/cracker_barbabietola.jpeg", tags: ["", "", ""] },
    { title: "2", content: "", img: "./public/images/pane_fritto_dolce.jpeg", tags: ["", "", ""] },
    { title: "3", content: "", img: "./public/images/pasta_barbabietola.jpeg", tags: ["", "", ""] },
    { title: "4", content: "", img: "./public/images/torta_paesana.jpeg", tags: ["", "", ""] },
  ];

//index
router.get('/', (req, res) => {
    res.json(postsList);
})


//show
router.get('/:id', (req, res) =>{
    res.json(postsList[req.params.id])
})


//store
router.post('/' , (req , res) =>{
    res.send('Creo un nuovo post')
})

//update
router.put('/:id' , (req, res) =>{
    res.send(`Modifico il post con id: ${req.params.id}`)
})

//modify
router.patch('/:id' , (req , res) =>{
    res.send(`Aggiorno il post con id: ${req.params.id}`)
})

//destroy
router.delete('/:id' , (req, res) =>{
    res.send(`Elimino il post con id ${req.params.id}`)
})


module.exports = router