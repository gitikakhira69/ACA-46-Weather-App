import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, Button } from 'react-native';


export default function Images(props){
    const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return(
        <View>
            <Image style={{width:80,height:80}} source={{uri:`http://openweathermap.org/img/wn/${props.icon}@2x.png`}}/>
        </View>
    );
}