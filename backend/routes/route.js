import express from 'express';
import { addOrganizer, getOrganizers, getOrganizer, editOrganizer, deleteOrganizer } from '../controller/organizer-controller.js';
import { addSpeaker, getSpeakers, getSpeaker, editSpeaker, deleteSpeaker } from '../controller/speaker-controller.js';

const router = express.Router();


// Organizer route 
router.post('/add-organizer',addOrganizer);
router.get('/all-organizers',getOrganizers);
router.get('/:id',getOrganizer);
router.put('/:id',editOrganizer);
router.delete('/:id',deleteOrganizer);


// Speaker route

router.post('/add-speaker',addSpeaker);
router.get('/all-speakers',getSpeakers);
router.get('/:id',getSpeaker);
router.put('/:id',editSpeaker);
router.delete('/:id',deleteSpeaker);

export default router;