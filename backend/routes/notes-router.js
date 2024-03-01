import Router from 'express';
import NotesController from '../controllers/notes-ctrl.js';

const NotesRouter = new Router();

NotesRouter.get('/', NotesController.read);
NotesRouter.post('/', NotesController.create);
NotesRouter.delete('/:id', NotesController.delete);
NotesRouter.patch('/:id', NotesController.update);

export default NotesRouter;
