import React, { useState,  useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies } from '../services/services'
import { Text, View, StatusBar, StyleSheet, Dimensions, FlatList } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const dimensions = Dimensions.get('screen')

const Home = () => {

    const [moviePosters, setMoviePosters] = useState([])
    const [popularMovies, setPopularMoves] = useState([])
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

    }, [])

    

    return (
    <>
        <View style={styles.sliderContainer}>
            <SliderBox 
                images={moviePosters}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 2.25 }
                autoplay={true}
                circleLoop={true} 
            />
        </View>
        <View style={styles.carousel}>
            <FlatList 
                horizontal={true} 
                data={popularMovies} 
                renderItem={({item}) => <Text>{item.original_title}</Text>}
            />
        </View>
    </>
  );
}


const styles = StyleSheet.create({
    sliderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimensions.height / 30
    },
    sliderStyle: {
       height: 0
    },
    carousel: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
      }
})

export default Home;

