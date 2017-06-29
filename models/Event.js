const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  description: String,
  date: { start: Date, end: Date, repeat: String },
  location: {
    coords: { lat: Number, lng: Number },
    address: { street: String, city: String, state: String, zip: String }
  },
  link: { url: String, text: String },
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date, default: undefined }
});

EventSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
