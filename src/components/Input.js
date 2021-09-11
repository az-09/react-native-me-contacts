import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

const Input = ({ onChangeText, value, label, icon, iconPosition, error, ...props }) => {

    const [focused, setFocused] = useState(false);

    const getBorderColor = () => {
        if (focused) {
            return 'blue'
        }
        if (error) {
            return 'red';
        }
    }

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return 'row'
            } else if (iconPosition === 'right') {
                return 'row-reverse'
            }
        }
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, {alignItems: icon ? 'center' : 'baseline', borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)} 
                    {...props}
                    />

            </View>
            {error && <Text style={styles.error}>{error}</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
        // borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 5,
        // alignItems: 'center'
    },

    inputContainer: {
        paddingVertical: 12,
    },

    textInput: {
        flex: 1,
        width: '100%'
    },

    error: {
        color: 'red',
        paddingTop: 4,
        fontSize: 12

    }


})

export default Input
