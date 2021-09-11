import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { REGISTER } from '../constants/routeNames';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const {navigate} = useNavigation();  
    return (
        <Container>
                
        
            <Image style={styles.logoImage} source={require('../assets/images/logo.jpg')} />

            <View>
                <Text style={styles.title}>Welcome to ME Contacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>


                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username" />
                    <Input
                        label="Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder="Enter Password" />

                    <Button color="blue" title="Submit" />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?
                        </Text >
                        <TouchableOpacity onPress={() => {navigate(REGISTER)}}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            {/* <Text>Hi from Login</Text>
            <Input 
                label="Username"
                onChangeText={(text) => onChangeText(text)} 
                value={value} 
                icon={<Text>ICON</Text>} 
                iconPosition="left" 
                error={"This field is required"} />
            <Input 
                label="Password" 
                onChangeText={(text) => onChangeText(text)} 
                value={value} 
                icon={<Text>ICON</Text>} 
                iconPosition="right" />
            
            <Button title="Submit" loading={true} disabled={true} />
            <Button title="Click Me" disabled={true} /> */}

        </Container>


    )
}

const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: "500"
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: "500"
    },
    form: {
        paddingTop: 20,

    },
    createSection: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    linkBtn:{
        paddingLeft: 17,
        color: 'blue',
        fontSize: 16
    },
    infoText:{
        fontSize: 17
    }


})


export default Login
