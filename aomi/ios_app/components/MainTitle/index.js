import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'

export default class MainTitle extends Component {
    render() {
        const {title}=this.props
        return (
            <View style={styles.mainTitle}>
                <Text style={styles.title}>{title} </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    mainTitle: {
        justifyContent: 'center',
        height: 44,
        paddingLeft: 10,
        paddingRight: 10
    },
    
    title:{
        fontSize: 16
    }
        
})
