import React from 'react'
import { Text } from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';

const Login = () => {

    const [value, onChangeText] = React.useState('')
    return (
        <Container>
            <Text>Hi from Login</Text>
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
        </Container>


    )
}


export default Login
