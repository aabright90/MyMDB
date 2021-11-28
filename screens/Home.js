import React, { useState,  useEffect } from 'react';
import { 
  getPopularMovies, 
  getUpcomingMovies,
  getTopRatedMovies,
  getCrappyNicolasCageMovies,
  getFamilyMovies, 
  getPopularTV,
  getDocumentaries 
} from '../services/services'
import { View,  Dimensions, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List'

import { styles } from '../assets/styles'

const dimensions = Dimensions.get('screen')

const Home = () => {

    const [moviePosters, setMoviePosters] = useState([])
    const [popularMovies, setPopularMoves] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularTV, setPopularTv] = useState([])
    const [documentaries, setDocumentaries] = useState([])
    const [crappyNicolasCageMovies, setCrappyNicolasCageMovies] = useState([])
    const [familyMovies, setFamilyMovies] = useState([])
    const [error, setError] = useState(false)
   
    useEffect(() => {

      getUpcomingMovies().then(movies => {
        let posters = []
        movies.forEach(movie => { 
            posters.push(`https://image.tmdb.org/t/p/original${movie.poster_path}`)
        })
        setMoviePosters(posters)
      }).catch(err => {
        setError(err)
      })

      getPopularMovies().then(movies => {
        setPopularMoves(movies)
      }).catch(err => {
        setError(err)
      })

      getPopularTV().then(tv => {
        setPopularTv(tv)
      }).catch(err => {
        setError(err)
      })

      getTopRatedMovies().then(movies => {
        setTopRatedMovies(movies)
      }).catch(err => {
        setError(err)
      })

      getFamilyMovies().then(movies => {
        setFamilyMovies(movies)
      }).catch(err => {
        setError(err)
      })

      getCrappyNicolasCageMovies().then(movies => {
        setCrappyNicolasCageMovies(movies)
      }).catch(err => {
        setError(err)
      })

      getDocumentaries().then(movies => {
        setDocumentaries(movies)
      }).catch(err => {
        setError(err)
      })

    }, [])

    
    return (
    <ScrollView>
        <View style={styles.sliderContainer}>
            <SliderBox 
                resizeMode="cover"
                images={moviePosters}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 2.25 }
                autoplay={true}
                circleLoop={true} 
            />
        </View>
        <View>
            <List 
                title="Popular Movies"
                data={popularMovies}
            />
        </View>
        <View>
            <List 
                title="Popular TV"
                data={popularTV}
            />
        </View>
        <View>
            <List 
                title="Top-Rated Movies"
                data={topRatedMovies}
            />
        </View>
        <View>
            <List 
                title="Top-Rated Family Movies"
                data={familyMovies}
            />
        </View>
        <View>
            <List 
                title="Low-Rated Nicolas Cage Movies"
                data={crappyNicolasCageMovies}
            />
        </View>
        <View>
            <List 
                title="Popular Documentaries"
                data={documentaries}
            />
        </View>
    </ScrollView>
  );
}

export default Home;

