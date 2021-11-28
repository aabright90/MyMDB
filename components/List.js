import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Card from './Card'
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

class List extends React.PureComponent {
    
    render() {
        const { data, title } = this.props
        return (
        
        <View style={styles.listContainer}>
            <View style={styles.listTitle}>
                <Text style={styles.text} >{title}</Text>
            </View>
            <View style={styles.list}>
                <FlatList 
                    horizontal={true} 
                    data={data} 
                    renderItem={({item}) => <Card item={item}/> }
                />
            </View>
        </View>
        
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20
    },
    listTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

List.propTypes = propTypes
export default List;



