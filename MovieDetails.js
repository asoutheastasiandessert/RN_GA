import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

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
    <View>
      <Text>Movie Details</Text>
      <Text>Title: {movie.title}</Text>
      <Text>Description: {movie.overview}</Text>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
        }}
        style={{height: 300}}
        resizeMode="contain"
      />
    </View>
  );
}
