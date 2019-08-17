import { Request, Response } from 'express';

import { Person } from '@cedar/types';
import { PersonModel } from '../models/person';

export class PersonsController {
  static getAllPersons = (request: Request, response: Response) => {
    // TODO tie treeId to token to only get persons in that tree
    response.send([{ name: 'Test Person' }]);
  };

  static getPerson = async (request: Request, response: Response) => {
    // TODO tie treeId to token to only get persons in that tree
    const id = request.params.id;
    // response.send({ name: 'Test Person' });
    const person = await PersonModel.findById(id);

    response.send(person);
  };

  static createPerson = (request: Request, response: Response) => {
    const person: Person = request.body;

    response.send(person);
  };
}
