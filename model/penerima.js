const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penerimaSchema = new Schema({
  Nama_Penerima: {
    type: String
  },
  Jenis_Usaha: {
    type: String
  },
  Besaran_Bantuan: {
    type: String
  },
  Alamat: {
    type: String
  }
})
module.exports = mongoose.model('penerima', penerimaSchema)
