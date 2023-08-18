

import express from 'express';
const router = express.Router();


/* GET the movie controller */
import {DisplaySongsList, DisplaySongsByID, AddSongs, UpdateSongs, DeleteSongs} from '../Controllers/songs';

router.get('/list', (req, res, next) =>   DisplaySongsList(req, res, next) );

router.get('/find/:id', (req, res, next) => DisplaySongsByID(req, res, next));

router.post('/add', (req, res, next) => AddSongs(req, res, next));

router.put('/update/:id', (req, res, next) => UpdateSongs(req, res, next));

router.delete('/delete/:id', (req, res, next) => DeleteSongs(req, res, next));


export default router;
