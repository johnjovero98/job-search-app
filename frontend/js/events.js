import { renderAllJobs, renderSearchedJobs, renderViewedJob } from './ui'

export const pageEvents = () => {
    //render all jobs into the dom
    renderAllJobs();
    
    // search functionality
    const searchForm = document.querySelector('#search-jobs-form')
    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        let searchQuery = e.target.elements['query'].value // value of what the user inputed into the form
        renderSearchedJobs(searchQuery);
    } )
    
    // view job functionality
    const jobList =  document.querySelector('#searched-jobs')
    jobList.addEventListener("click", async (e) => {
        if (e.target.classList.contains("view-job-button")) {
            const jobId = e.target.id 
            renderViewedJob(jobId)
        }
    })
}