const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    history: { type: String, required: true },
    symptoms: { type: String, required: true },
    additionalInfo: { type: String },
    correctTest: { type: String, required: true },
    correctDiagnosis: { type: String, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);
