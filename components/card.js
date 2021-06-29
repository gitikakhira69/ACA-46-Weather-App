import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';

export default function Card(props) {
  const [main, setMain] = useState({});
  const [weather, setWeather] = useState({});
  const [name, setName] = useState('');
  const title = props.title;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`
      )
      .then((res) => {
        setMain(res.data.main);
        setWeather(res.data.weather[0]);
        setName(res.data.name);
        console.log(res.data.weather[0].icon);
      });
  }, [title]);

  const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      backgroundColor: '#f1d4d4',
      justifyContent: 'space-around',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      textAlign: 'center',
      color: '#646464',
      shadowColor: '#fff8cd',
      shadowRadius: 20,
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    icon: {
      height: 80,
      width: 80,
    },
    iconCon: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 50,
      paddingRight: 50,
    },
  });

  return (
    <View style={styles.card}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{name}</Text>
      </View>

      <View style={styles.top}>
        <View style={{ textAlign: 'left', paddingLeft: 25 }}>
          <Text>MAX</Text>
          <Text>{main.temp_max} &#8451; </Text>
        </View>
        <View style={{ textAlign: 'right', paddingRight: 25 }}>
          <Text>MIN</Text>
          <Text>{main.temp_min}&#8451; </Text>
        </View>
      </View>

      <View>
        <Text>{weather.main}</Text>
        <View style={styles.iconCon}>
          <Image style={styles.icon} source={icon} />
        </View>
      </View>

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
          {main.temp}&#8451;
        </Text>
        <View style={styles.bottom}>
          <Text>Feels Like </Text>
          <Text>{main.feels_like}&#8451; </Text>
        </View>
      </View>
    </View>
  );
}
