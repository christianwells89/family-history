import { Router } from 'express';
import { PersonsController } from '../controllers/persons.controller';

const router = Router();

router.get('/persons', PersonsController.getAllPersons);

router.get('/person/:id([0-9]+)', PersonsController.getPerson);

router.post('/person', PersonsController.createPerson);

export default router;