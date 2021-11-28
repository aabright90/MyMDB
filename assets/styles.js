import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('screen')

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    sliderContainer: {
        marginTop: dimensions.height * 0.035
    },
    sliderStyle: {
       height: 0
    },
    contentContainer: {
        marginTop: dimensions.height * 0.5,
        display: 'flex',
    }
})