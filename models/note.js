const mongoose = require("mongoose");

// Define the sticky notes schema
const stickyNoteSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now // Default to current timestamp
  },
  type:{
    type:String,
    required:true
  }
});

// Define the main list schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  stickynote: [stickyNoteSchema] // Embedded schema for sticky notes
});

// Create and export the list model
const note = mongoose.model("note", userSchema);
module.exports = note;
