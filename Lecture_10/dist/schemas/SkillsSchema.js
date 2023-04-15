"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsSchema = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
exports.skillsSchema = new mongoose_1.Schema({
    name: { type: String, required: true, lowercase: true },
    level: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        validate: {
            validator: (v) => v % 2 === 0,
            message: (params) => `${params.value} can not be odd :(*`,
        },
    },
});
