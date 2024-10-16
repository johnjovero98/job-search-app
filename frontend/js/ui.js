import { getJobPostings, searchJobPostings, viewJobDetails } from "./api/jobs";

const jobListings = document.querySelector('#searched-jobs') // access the ul in the dom
const jobDetails = document.querySelector('#job-details-card') // access the div that will contain the job details


// job listing template
const createListItem = (jobData, jobList) => {
    jobList.innerHTML += `<li class="job-card card my-1" style="width: 18rem;">
                            <div class="card-header">${jobData.company}</div>
                            <div class="card-body">
                                <h5 class="card-title">${jobData.title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${jobData.location}</h6>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Posted ${jobData.date_posted}</h6>
                                <button class="btn btn-primary view-job-button" id="${jobData.id}">View Job</button>
                            </div>
                        </li>`
}

// job details template
const createView = (jobData) => {
    jobDetails.innerHTML = `<div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">${jobData.title}</h5>
                                    <h4 class="card-subtitle mb-2 text-body-secondary pb-3">${jobData.company}</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary ">${jobData.location}</h6>
                                    <h6 class="card-subtitle mb-2 text-body-secondary pb-3">Posted ${jobData.date_posted}</h6>
                                
                                    <h5 class="card-subtitle mb-2">Description</h5>
                                    <p class="card-text">${jobData.description}</p>
                                    <h5 class="card-subtitle mb-2">Qualifications</h5>
                                    <p class="card-text">${jobData.qualifications}</p>
                                    <button class="btn btn-success save-job">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                    Save Job
                                    </button>
                                </div>
                            </div>`
}


// render all data into the DOM
export const renderAllJobs = async () => {
    const jobsList = await getJobPostings(); //function returns array of objects
    jobsList.forEach((jobs) => {
        createListItem(jobs, jobListings)
    })
}

// render searched items into the DOM
export const renderSearchedJobs = async (query) => {
    const jobsList = await searchJobPostings(query)
    jobListings.replaceChildren()

    if (jobsList.length === 0) {
        jobListings.innerHTML = `<li class="text-dark  list-unstyled">No results found</li>`
    }

    jobsList.forEach((jobs) => {
        createListItem(jobs, jobListings)
    })
}

// render Job details into the DOM
export const renderViewedJob = async (query) => {
    const jobView = await viewJobDetails(query)
    createView(jobView)
}

