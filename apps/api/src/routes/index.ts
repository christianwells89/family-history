import { Router } from 'express';

import persons from './persons';

const routes = Router();

routes.use(persons);

export default routes;