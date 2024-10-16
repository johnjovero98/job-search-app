// your code goes here.
import { getData } from "./http"

// read all data 
export const getJobPostings = async () => {
    let url = `http://localhost:3000/jobs`
    const jobsData = await getData(url) 
    return jobsData// returns an array of objects
}

// search data 
export const searchJobPostings = async (query) => {
    let url = `http://localhost:3000/jobs?q=${query}`
    const jobsData = await getData(url)
    return jobsData //returns an array of objects
}

// view data
export const viewJobDetails = async (query) => {
    let url = `http://localhost:3000/jobs/${query}`
    const jobsData = await getData(url)
    return jobsData //returns an object
}



