import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Search() {
  const [ketikan, setKetikan] = useState('');
  const [movies, setMovies] = useState([]);
  return (
    <View style={{margin: 10}}>
      <Text>Search Page</Text>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
        }}>
        <TextInput
          placeholder="Find a movie!"
          style={{width: 200, borderWidth: 1, marginRight: 5}}
          value={ketikan}
          onChangeText={e => setKetikan(e)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
          }}
          onPress={() => {
            fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=570c36d75740509c00d865a804d826a5&language=en-US&query=${ketikan}&page=1&include_adult=false`,
            )
              .then(e => e.json())
              .then(e => setMovies(e.results));
          }}>
          <Text>Find!</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item, i) => {
          return i;
        }}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {movie_id: item.id})
              }
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                margin: 2,
                borderColor: '#dedede',
                borderRadius: 10,
                backgroundColor: '#fff',
                overflow: 'hidden',
              }}>
              <ImageBackground
                source={{
                  uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                }}
                style={{width: 210, height: 300, justifyContent: 'flex-end'}}>
                <LinearGradient
                  colors={[
                    'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.9)',
                    'rgba(255,255,255,0.9)',
                    '#f2f2f2',
                  ]}>
                  <Text style={{textAlign: 'center', paddingVertical: 5}}>
                    {item.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
