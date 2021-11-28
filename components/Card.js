import React, { PureComponent } from 'react'
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'

const placeHolderImage = require('../assets/placeholder-image.jpg')

const propTypes = {
    item: PropTypes.object
}

class Card extends PureComponent {
    
    render() {
        const { item } = this.props
    
        return (
            <TouchableOpacity style={styles.container} >
                <Image 
                    resizeMode="cover"
                    style={styles.image} 
                    source={
                        !item.poster_path ? 
                        placeHolderImage : 
                        { uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }
                    }
                />
                {
                    !item.poster_path && <Text style={styles.movieName}>{item.original_title}</Text>
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 5,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20
    },
    movieName: {
        position: 'absolute',
        width: 100,
        textAlign: 'center'
    }
})

Card.propTypes = propTypes

export default Card;
