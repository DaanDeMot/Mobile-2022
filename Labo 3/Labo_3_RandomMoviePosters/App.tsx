import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import babelConfig from './babel.config';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[0].title + " " + FilmPoster_array[0].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[0].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[0].title}</Text><Text>gemaakt in {FilmPoster_array[0].year}</Text>
      </View>

      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[1].title + " " + FilmPoster_array[1].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[1].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[1].title}</Text><Text>gemaakt in {FilmPoster_array[1].year}</Text>
      </View>

      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[2].title + " " + FilmPoster_array[2].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[2].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[2].title}</Text><Text>gemaakt in {FilmPoster_array[2].year}</Text>
      </View>

      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[3].title + " " + FilmPoster_array[3].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[3].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[3].title}</Text><Text>gemaakt in {FilmPoster_array[3].year}</Text>
      </View>

      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[4].title + " " + FilmPoster_array[4].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[4].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[4].title} </Text><Text>gemaakt in {FilmPoster_array[4].year}</Text>
      </View>

      <View style={styles.section}>
      <Pressable
                delayLongPress={1000}
                onLongPress={() => {
                    Alert.alert(FilmPoster_array[5].title + " " + FilmPoster_array[5].year);
                }}
            >
      <Image  
                style={styles.image}
                source={{
                uri: FilmPoster_array[5].uri
            }}
            />
            </Pressable>
            <Text>{FilmPoster_array[5].title} </Text><Text> gemaakt in {FilmPoster_array[5].year}</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
      flex: 1,
      marginTop : 50,
      alignItems: "flex-start",
      width : '50%',
      height:'100%',
      marginLeft: 'auto',
      marginRight : 'auto'
    },

  image: { 
    height: 50, 
    resizeMode: 'contain',
  },

  section : { 
    marginBottom: 10,
    borderBottomWidth : 2,
    borderColor: "black",
    width: "100%"
    }
});

const FilmPoster_array  = [
  { uri: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", 
  title: "LOTR - The fellowship of the ring ", year: "2001"},
  { uri: "https://occ-0-987-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY5_5KQ4JY_jRh_eCFCm_Nyv3lyuIOVWL0TCPj6VxZKqFiH7h5Nc3-NB0Zl8CQOorMrcTTbZbzoFKUxs_83IiHfJiNe-PjQYpxhD.jpg?r=df6", 
  title: "LOTR - The Two Towers" , year: "2002"},
  { uri: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg ", 
  title: "LOTR - The return of th king " , year: "2003"},
  { uri: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg", 
  title: "Spider man 1" , year: "2002"},
  { uri: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB98484FAF58CD987B8DFE4BB930C2CA91262B2045E59CE34534DB345DE9BEF8/scale?width=1200&aspectRatio=1.78&format=jpeg",
   title: "Spider man 2" , year: "2010"},
  { uri: "https://media.s-bol.com/3wVWYRg603xr/550x702.jpg", 
  title: "Spider-man 3" , year: "2001"},
];

export {};