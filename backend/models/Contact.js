const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    number: {
        type: String,
    },
  },
  {
    collation : { locale: 'en_US'}
  }
);
module.exports = mongoose.model("Contact", contactSchema);
