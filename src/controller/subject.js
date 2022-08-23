/** @format */

const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");

const getAllSubjectController = async(req, res) => {
    const [rows, fields] = await db.promise().query("SELECT * FROM subject");

    res.send({
        code: RESPONSE_CODE.SUCCESS,
        message: "Get all subject successful",
        data: rows,
    });
};

module.exports = {
    getAllSubjectController,
};