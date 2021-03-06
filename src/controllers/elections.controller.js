import db from '../models/index'
import { electionFactory } from  '../services/electionServices';
// import CodeMaker from '../services/codeMaker';
// import { formatElectionFields } from '../services/electionUtils';
// import { v4 as uuid } from 'uuid';
// import { codeProperty } from '../lib/props';

const electionTable = db.elections;
// const CandidateTable = db.candidate;
// const VoterTable = db.voter;


export async function createElection(req, res) {
   
    // req params:
    // name: string
    // creator: string
    // open: bool
    // emailBallots: bool
    // ?voters: {?name, ?email}
    // candidates: [string]
    // anonymous: bool

    try {
        console.log('REQUEST: ', req.body);
        const newElection = await electionFactory(electionTable, req.body)
        const data = await newElection.save();

        res.json({
            success: true,
            message: 'Election created successfully',
            data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}

// export async function getElection(req, res) {
//     try {
//         const createData = await Election.findOne({ where: req.body });
//         if (createData) {
//             res.json({
//                 success: true,
//                 message: "Election fetch Successfull",
//                 data: createData
//             });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong!"
//         });
//     }
// }

// export async function deleteElection(req, res) {
//     try {
//         const deleteData = await Election.destroy({ where: { id: req.body.id } });
//         if (deleteData) {
//             res.json({
//                 success: true,
//                 message: "Election Deleted Successfully",
//                 data: deleteData
//             });
//         }
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong!"
//         });
//     }
// }

// export async function updateElections(req, res) {
//     try {
//         const findData = await Election.findAll({ where: { id: req.body.id } });
//         if (findData.length > 0) {
//             findData.forEach(async data => { await data.update(req.body) })
//         }
//         return res.json({
//             success: true,
//             message: "Election Updated Successfully",
//             data: findData
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             message: "Something went wrong!"
//         });
//     }
// }