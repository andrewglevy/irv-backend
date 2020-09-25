import Election from '../models/election';

export async function getElections(req, res) {
    try {
        const getData = await Election.findAll(req.body)
        if (getData) {
            res.json({
                success: true,
                message: "Election Fetch Successful",
                data: getData
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        });
    }
}
export async function getElection(req, res) {
    try {
        const createData = await Election.findOne({ where: req.body });
        if (createData) {
            res.json({
                success: true,
                message: "Election fetch Successfull",
                data: createData
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}

export async function createElection(req, res) {
    try {
        console.log(`REQUEST: ${req}`);
        const checkData = await Election.findOne({ where: { name: req.body.name } });
        if (checkData) {
            res.json({
                message: "Already Exists",
                data: checkData
            });
        } else {
            const createData = await Election.create(req.body, { fields: ['name'] });
            if (createData) {
                res.json({
                    success: true,
                    message: "Election Created Successfully",
                    data: createData
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}

export async function deleteElection(req, res) {
    try {
        const deleteData = await Election.destroy({ where: { id: req.body.id } });
        if (deleteData) {
            res.json({
                success: true,
                message: "Election Deleted Successfully",
                data: deleteData
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}

export async function updateElections(req, res) {
    try {
        const findData = await Election.findAll({ where: { id: req.body.id } });
        if (findData.length > 0) {
            findData.forEach(async data => { await data.update(req.body) })
        }
        return res.json({
            success: true,
            message: "Election Updated Successfully",
            data: findData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}


export async function index (req, res) {
    try {
        const index = await Election.findAll()
        if (index) {
            res.json({
                success: true,
                message: "Elections Fetched Successfully",
                data: index
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        });
    }
}