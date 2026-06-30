export function filterJobs(jobs) {

    return jobs.filter(job => {

        const title = job.title.toLowerCase();
        const location = job.location.toLowerCase();

        return (

            (
                title.includes("php") ||
                title.includes("full stack") ||
                title.includes("laravel") ||
                title.includes("symfony")
            )

            &&

            (
                location.includes("remote")
            )

        );

    });

}