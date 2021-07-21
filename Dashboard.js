import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {changeName, getMovies} from './src/redux/action/UserAction';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [nowPlaying, setNowPlaying] = useState([]);

  const user_redux = useSelector(state => state.user);

  const movies_redux = useSelector(state => state.user.movies);

  useEffect(async () => {
    const e = await AsyncStorage.getItem('username');
    setUser(e);
    const a = await dispatch(getMovies());
    console.log('a ', a);
    setNowPlaying(a);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text>User : {user}</Text>
        <TextInput
          placeholder="Filter"
          value={user_redux.name}
          onChangeText={e => {
            dispatch(changeName(e));
            // setFilterMovie(e);
            // if (e.length === 0) {
            //   setMovies(nowPlaying);
            // } else {
            //   let newMovie = movies.filter(
            //     foo => foo.title.toLowerCase().search(e.toLowerCase()) >= 0,
            //   );
            //   setMovies(newMovie);
            // }
          }}
        />
      </View>
      {movies_redux.length === 0 ? (
        <Text>Oops... your movie is not ready</Text>
      ) : (
        <FlatList
          data={movies_redux}
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
                      'rgba(255,255,255,0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,0.7)',
                      'rgba(255,255,255,0.9)',
                      '#f2f2f2',
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingVertical: 5,
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}
