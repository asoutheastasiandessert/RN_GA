import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  VirtualizedList,
} from 'react-native';
import axios from 'axios';
import Movies from './Movies';

const HomePage = props => {
  const [moviesStore, setMoviesStore] = useState([]);

  useEffect(() => {
    // dispatch({type: 'GET_DATA'})s
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1',
      )
      .then(res => setMoviesStore(res.data.results));
  }, []);

  const renderItem = ({item, index}) => {
    // if (index !== 5) {
    return (
      <Movies
        title={item.title}
        overview={item.overview}
        voteCount={item.vote_count}
        posterPath={item.poster_path}
      />
    );
    // } else {
    //     return (
    //         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
    //             <Text style={{color:'white'}}>More</Text>
    //         </TouchableOpacity>
    //     )
    // }
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.backgroundBase}>
        <View style={{padding: 10, marginHorizontal: 10}}></View>
        <FlatList
          data={moviesStore}
          removeClippedSubviews={true}
          initialNumToRender={20}
          keyExtractor={(elem, i) => i}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={5}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

// const mapStateToProps = () => {

// }

export default HomePage;

const styles = StyleSheet.create({
  backgroundBase: {
    backgroundColor: 'black',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 10,
    height: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
