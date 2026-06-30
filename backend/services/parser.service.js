// services/parser.service.js

import * as cheerio from "cheerio";

export function parseJobs(html) {

    const $ = cheerio.load(html);

    const jobs = [];

    $("article").each((i, el) => {

        jobs.push({

            title: $(el).find("a").first().text().trim(),

            company: $(el).find("[data-automation='jobCompany']").text(),

            location: $(el).find("[data-automation='jobLocation']").text(),

            link: "https://seek.com" + $(el).find("a").attr("href")

        });

    });

    return jobs;

}