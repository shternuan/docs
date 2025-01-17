import mongoose from "mongoose"

const FormModel = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model.FormModel || mongoose.model('Form', FormModel)