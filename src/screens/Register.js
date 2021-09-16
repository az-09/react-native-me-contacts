import React, { useContext, useEffect, useState } from 'react'
import { Text, Image, StyleSheet, View } from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LOGIN } from '../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import { register } from '../context/actions';
import { Context } from '../context/Provider';


const Register = () => {
    const { navigate } = useNavigation();
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { authDispatch, authState: { error, loading, data } } = useContext(Context)

    console.log('form:  >>', form)

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })

        if (value !== '') {
            if (name === 'password') {
              if (value.length < 6) {
                setErrors((prev) => {
                  return {...prev, [name]: 'This field needs min 6 characters'};
                });
              } else {
                setErrors((prev) => {
                  return {...prev, [name]: null};
                });
              }
            } else {
              setErrors((prev) => {
                return {...prev, [name]: null};
              });
            }
          } else {
            setErrors((prev) => {
              return {...prev, [name]: 'This field is required'};
            });
          }
    }

    const onSubmit = () => {
        if (!form.userName) {
      
            setErrors(prev => {
                return { ...prev, userName: 'Please add a username' }
            })
        }
        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: 'Please add First name' }
            })
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: 'Please add Last name' }
            })
        }
        if (!form.email) {
            setErrors(prev => {
                return { ...prev, email: 'Please add an email' }
            })
        }
        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: 'Please add a password' }
            })
        }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
          ) {
            register(form)(authDispatch)
          }


    }
    return (
        <Container>


            <Image style={styles.logoImage} source={require('../assets/images/logo.jpg')} />

            <View>
                <Text style={styles.title}>Welcome to ME Contacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>
               
                <View style={styles.form}>
                    {error?.error && <Text>{error.error}</Text>}
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value })
                        }}
                        error={errors.userName || error?.username?.[0]}
                    />

                    <Input
                        label="First name"
                        iconPosition="right"
                        placeholder="Enter First name"
                        onChangeText={(value) => {
                            onChange({ name: 'firstName', value })
                        }}
                        error={errors.firstName|| error?.first_name?.[0]}
                    />
                    <Input
                        label="Last name"
                        iconPosition="right"
                        placeholder="Enter Last name"
                        onChangeText={(value) => {
                            onChange({ name: 'lastName', value })
                        }}
                        error={errors.lastName|| error?.last_name?.[0]}
                    />
                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        onChangeText={(value) => {
                            onChange({ name: 'email', value })
                        }}
                        error={errors.email|| error?.email?.[0]}
                    />

                    <Input
                        label="Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder="Enter Password"
                        onChangeText={(value) => {
                            onChange({ name: 'password', value })
                        }}
                        error={errors.password || error?.password?.[0]}
                    />

                    <Button onPress={onSubmit} color="blue" title="Submit" loading={loading} disabled={loading}/>
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?
                        </Text >
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={styles.linkBtn}>Login</Text>
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
    linkBtn: {
        paddingLeft: 17,
        color: 'blue',
        fontSize: 16
    },
    infoText: {
        fontSize: 17
    }


})


export default Register
