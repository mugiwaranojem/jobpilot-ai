// services/seek.service.js

import axios from "axios";
import * as cheerio from "cheerio";

const urls = [
  "https://au.seek.com/full-stack-developer-%7C-php-jobs/remote?daterange=3",
  "https://nz.seek.com/full-stack-developer-%7C-php-jobs/remote?daterange=3",
  "https://ph.seek.com/full-stack-developer-%7C-php-jobs/remote?daterange=3"

];

export async function fetchJobs() {

    let jobs = [];
    for (const url of urls) {
        const response = await axios.get(url, {
            headers: {
                "User-Agent":"Mozilla/5.0"
            }

        });
        const parsed = parseJobs(response.data);
        jobs.push(...parsed);
    }
    return jobs;
}