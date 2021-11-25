import axios from 'axios'

const apiUrl = 'https://api.themoviedb.org/3/'
const KEY = 'api_key=47165bfc4792e9be4ba0dc106a561d96';

export const getPopularMovies = async () => {
    const res = await axios.get(`${apiUrl}movie/popular?${KEY}&language=en-US&page=1`)
    return res.data.results;
}
  
export const getUpcomingMovies = async () => {
    const res = await axios.get(`${apiUrl}movie/upcoming?${KEY}&language=en-US&page=1`)
    return res.data.results;
}

export const getPopularTV = async () => {
    const res = await axios.get(`${apiUrl}tv/popular?${KEY}&language=en-US&page=1`)
    return res.data.results;
}