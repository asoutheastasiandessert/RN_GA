import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MovieDetails({route}) {
  const {movie_id} = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=570c36d75740509c00d865a804d826a5&language=en-US`,
    )
      .then(e => e.json())
      .then(e => setMovie(e));
  }, []);

  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
          }}
          style={{height: 300}}>
          <LinearGradient
            style={{flex: 1}}
            colors={[
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,1)',
            ]}></LinearGradient>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <LinearGradient
          style={{flex: 1}}
          colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.8)']}>
          <Text style={{color: '#fff'}}>Movie Details</Text>
          <Text style={{color: '#fff'}}>Title: {movie.title}</Text>
          <Text style={{color: '#fff'}}>Description: {movie.overview}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
