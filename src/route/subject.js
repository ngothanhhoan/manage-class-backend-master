/** @format */

const express = require("express");
const { getAllSubjectController } = require("../controller/subject");

const subjectRouter = express.Router();

subjectRouter.get("/", getAllSubjectController);

module.exports = subjectRouter;