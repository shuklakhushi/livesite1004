"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const songs_1 = require("../Controllers/songs");
router.get('/list', (req, res, next) => (0, songs_1.DisplaySongsList)(req, res, next));
router.get('/find/:id', (req, res, next) => (0, songs_1.DisplaySongsByID)(req, res, next));
router.post('/add', (req, res, next) => (0, songs_1.AddSongs)(req, res, next));
router.put('/update/:id', (req, res, next) => (0, songs_1.UpdateSongs)(req, res, next));
router.delete('/delete/:id', (req, res, next) => (0, songs_1.DeleteSongs)(req, res, next));
exports.default = router;
//# sourceMappingURL=index.js.map