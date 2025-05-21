import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    icon: {type: String},
    color: {type: String},
    isUserDefined: {type: Boolean, default:false},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps: true
});

export const Category = mongoose.model('Category', categorySchema);