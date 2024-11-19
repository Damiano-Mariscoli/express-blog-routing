const express = require('express')
const router = express.Router()


//index
router.get('/' , (req, res) =>{
    res.send("Ecco l'elenco dei posts")
})


//show
router.get('/:id', (req, res) =>{
    res.send(`Mostro il post con id: ${req.params.id}`)
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