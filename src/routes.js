import { Router } from 'express';
const routes = Router();
import '@babel/polyfill';
import {
    createElection,
    index
//     getElection, 
//     getElections, 
//     deleteElection, 
//     updateElections,
} from './controllers/elections.controller';

// router.post('/getElections', getElections);
// router.post('/getElection', getElection);
// router.delete('/removeElection', deleteElection);
// router.put('/updateElection', updateElections);
routes.post('/election/create', createElection);
routes.get('/election/index', index);

export default routes;