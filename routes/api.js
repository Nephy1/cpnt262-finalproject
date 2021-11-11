const express = require('express')
const router = express.Router()

const Gallery = require('../models/gallery') 
const localLocation = require('../models/seeds/gallery')






router.get('/gallery', async (req, res) => {
    try {
      let data = await Location.find()
  
      
      if (data.length === 0) {
        data = localGallery
      }
     else { 
        res.send(data) 
      }
    } catch (err) {
        console.log(err) 
        res.send({ error: 'Gallery Not Found' }) // send JSON 404 error
      }
    })

    router.get('/gallery/:id', async (req, res) => {
        try {
       
          let data = await Gallery.findOne({ id: req.params.id })
      
          
          if (!data) {
            data = localGallery.find(Location => Number(req.params.id) === Location.id) 
          }
      
          if (data) { 
            res.send(data) 
          } else { 
            res.send({ error: 'Gallery Doesnt Exist' }) // send JSON 404 error
          }
      
        } catch (err) {
          console.log(err) 
          res.send({ error: '404 Not Found' }) // send JSON 404 error
        }
      })
  
  module.exports = router
