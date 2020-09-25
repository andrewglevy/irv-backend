import { Router } from 'express';
const router = Router();
import '@babel/polyfill';
import {
    createElection,
    getElection, 
    getElections, 
    deleteElection, 
    updateElections 
} from '../controllers/elections.controller';

router.post('/getElections', getElections);
router.post('/getElection', getElection);
router.post('/create', createElection);
router.delete('/removeElection', deleteElection);
router.put('/updateElection', updateElections);

export default router;