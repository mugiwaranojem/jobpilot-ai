// controllers/jobs.controller.js

import { fetchJobs } from "../services/seek.service.js";

export async function getJobs(req, res) {

    const jobs = await fetchJobs();

    res.json(jobs);

}