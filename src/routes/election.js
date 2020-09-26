import { Router } from 'express';
const router = Router();
import '@babel/polyfill';
import {
    createElection,
    index
//     getElection, 
//     getElections, 
//     deleteElection, 
//     updateElections,
} from '../controllers/elections.controller';

// router.post('/getElections', getElections);
// router.post('/getElection', getElection);
// router.delete('/removeElection', deleteElection);
// router.put('/updateElection', updateElections);
router.post('/create', createElection);
router.get('/index', index);

export default router;