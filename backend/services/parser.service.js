import * as cheerio from "cheerio";

const SEEK_BASE_URL = "https://www.seek.com.au";

export function parseJobs(html) {
    const $ = cheerio.load(html);

    const jobs = [];

    $('div[data-automation="search-result-job-list"] article').each((_, article) => {

        const anchor = $(article)
            .find('a[data-automation="job-list-view-job-link"]')
            .first();

        const title = $(article)
            .find("h3")
            .first()
            .text()
            .trim();

        if (!title || !anchor.length) {
            return;
        }

        jobs.push({
            title,
            company: $(article)
                .find('[data-automation="jobCompany"]')
                .text()
                .trim(),

            location: $(article)
                .find('[data-automation="jobLocation"]')
                .text()
                .trim(),

            salary: $(article)
                .find('[data-automation="jobSalary"]')
                .text()
                .trim(),

            workType: $(article)
                .find('[data-automation="jobWorkType"]')
                .text()
                .trim(),

            listedAt: $(article)
                .find("time")
                .text()
                .trim(),

            link: new URL(anchor.attr("href"), SEEK_BASE_URL).href
        });

    });

    return jobs;
}