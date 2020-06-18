import React from 'react';

import { TextInput, Text, View, StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';


const SplashScreen = () => {

    return(
        <View style={styles.container}>
            <LinearGradient colors={['#1fcc87', '#0d6ad4']} style={styles.linearGradient}>
                <View style={styles.header}>
                    <Animatable.Image animation="fadeInLeftBig" duration={3000}
                        style={styles.logo}
                        source= {require('../images/logo.png')}
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.input}>
                        <Icon name="user-o" size={25} color="#d3d7db" style={{marginRight: 5}}/>
                        <TextInput
                            placeholder= "Username"
                            placeholderTextColor= "#d3d7db"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                        <MaterialIcon name="checkbox-marked-circle-outline" size={25} color="#d3d7db"/>
                    </View>
                    <View style={[styles.input, {marginTop: 20, marginLeft: -4}]}>
                        <MaterialIcon name="lock-outline" size={30} color="#d3d7db" style={styles.icon}/>
                        <TextInput
                            placeholder= "Password"
                            placeholderTextColor= "#d3d7db"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                        <TouchableOpacity>
                            <MaterialIcon name="eye-off" size={25} color="#d3d7db"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={styles.button} onPress={()=> {loginHandle(data.email,data.password)}}>
                                <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity>
                        <Text style={{color: '#d3d7db'}}>Forgot Your Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 170}}>
                        <Text style={{color: '#d3d7db'}}>Don't Have an Account?</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={styles.button} onPress={()=> {loginHandle(data.email,data.password)}}>
                                <Text style={styles.buttonText}>Register Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    header: {
        flex: 1,
        marginTop: 60
    },
    footer: {
        flex: 2,
        alignItems: 'center'
    },
    textInput: {
        fontSize: 17,
        flex:1,
        height: 40,
        borderColor: "white",
        color: "white",
    },
    input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#d3d7db",
        width: 350
    },
    button: {
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth:1,
        borderColor: '#d3d7db'
    },
    buttonText: {
        color: '#d3d7db',
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default SplashScreen;