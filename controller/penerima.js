const penerimaModel = require('../model/penerima')
const objectid = require('mongoose').Types.ObjectId

exports.create= (data) =>
  new Promise((resolve, reject)=> {
    penerimaModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Data Has Been Added'
      })).catch(()=> ({
        status : false,
        pesan : 'Failed'
      }))
  })

exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    penerimaModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Data Has been Shown',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'failed',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    penerimaModel.findOne({
        _id: objectid(id)
      })
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Data Has been Shown',
          data : result
        })
      })
      .catch(()=> reject ({
        status : false,
        pesan : 'Failed',
        data : null
      }))
    })

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    penerimaModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : 'Data Has been Updated',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Failed',
    }))
  })

exports.delete = (id) =>
  new Promise((resolve, reject)=>{
    penerimaModel.deleteOne({
      _id: objectid(id)
    }).then (() => resolve({
      status : true,
      pesan : 'Data Has been Deleted',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Failed',
      }))
  })