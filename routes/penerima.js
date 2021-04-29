const router = require('express').Router()
const penerimaController = require('../controller/penerima')

router.post('/insert', (req, res)=> {
    penerimaController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getall', (req, res)=> {
    penerimaController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getbyid/:id', (req, res)=> {
    penerimaController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
    penerimaController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    penerimaController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router
  