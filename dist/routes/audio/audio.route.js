"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audio_controller_1 = require("./audio.controller");
const audio = (0, express_1.Router)();
audio.get("/stream", audio_controller_1.default.stream);
audio.get("/toprate", audio_controller_1.default.toprate);
audio.get("/popular", audio_controller_1.default.popular);
audio.get("/info", audio_controller_1.default.info);
audio.get("/search", audio_controller_1.default.search);
exports.default = audio;
