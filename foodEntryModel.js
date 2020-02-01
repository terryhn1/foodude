const mongoose = require("mongoose");
// const slugify = require("slugify");

const foodEntrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'An entry must have a name']
        },
        price: {
            type: Number,
            required: [true, 'An entry must have a price']
        },
        description: {
            type: String
        },
        locations: [String],
        image: String,
        // tag1: String,
        
    }
)

// Enables search by text
foodEntrySchema.index({ '$**': 'text', 'tags.tag1': 'text', 'tags.tag2': 'text', 'tags.tag3': 'text' });

const foodEntry = mongoose.model('foodEntry', foodEntrySchema);

module.exports = foodEntry;