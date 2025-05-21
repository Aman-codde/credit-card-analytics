import mongoose from "mongoose";
import { CARD_TYPES } from "../constants/cardEnums";

const transactionSchema = new mongoose.Schema({
    amount: {type: Number, required: true, min: 0.01},
    date: {type: Date, required: true},
    merchant: {type: String},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    rewardTag: {type: String},
    cardId: {type: String, enum: CARD_TYPES},
    notes: {type: String},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
},
{
    timestamps: true
});

export const Transaction = mongoose.model('Transaction', transactionSchema);