import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Container = ({style, children}) => {
    return (
        <ScrollView>
            <View style={styles.wrapper, style}>
                {children}

            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 20
    }

})

export default Container
