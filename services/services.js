import axios from 'axios'

const apiUrl = 'https://api.themoviedb.org/3/'
const KEY = 'api_key=5dc86979ec1f805b44dfb47e7482cd88';

export const getPopularMovies = async () => {
    const res = await axios.get(`${apiUrl}movie/popular?${KEY}&language=en-US&page=1`)
    return res.data.results;
}

export const getTopRatedMovies = async () => {
    const res = await axios.get(`${apiUrl}movie/top_rated?${KEY}&language=en-US&page=1`)
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

export const getFamilyMovies = async () => {
    const res = await axios.get(`${apiUrl}discover/movie?${KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`)
    return res.data.results;
}

export const getCrappyNicolasCageMovies = async () => {
    const res = await axios.get(`${apiUrl}discover/movie?${KEY}&with_people=2963&sort_by=vote_average.asc`)
    return res.data.results;
}

export const getDocumentaries = async () => {
    const res = await axios.get(`${apiUrl}discover/movie?${KEY}&with_genres=99&certification_country=US&certification.lte=PG&sort_by=popularity.desc`)
    return res.data.results;
}