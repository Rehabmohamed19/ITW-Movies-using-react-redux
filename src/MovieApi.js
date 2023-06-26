import axios from 'axios';


// const APIKey = '8f8651655f78c47056460d8762481908'
export default axios.create({
    baseURL:"https://api.themoviedb.org/3/discover/"
})