import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Movies = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={{width: Dimensions.get('screen').width -100, height:100, borderWidth:1 }}>
                    <Image source={{uri:'https://image.tmdb.org/t/p/w200' + props.posterPath}}
                    style={{width: Dimensions.get('screen').width -100, height:100}}/>
                </View>
                <Text style={{color:'black'}}>{props.title}</Text>
                <Text>{props.overview}</Text>
                <View style={styles.footerContent}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <MaterialCommunityIcon name='message-outline' size={20}/>
                        <Text>{props.voteCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcon name='share-variant' size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Movies

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('screen').width -50,
        height: 350,
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:10,
        justifyContent:'center',
        paddingVertical:20
     },
    
    contentContainer : {
        height:'100%',
        justifyContent:'space-between',
        alignItems:'center', 
        marginHorizontal:10,
    },
    footerContent: {
        width: Dimensions.get('screen').width -100,
        flexDirection:'row', 
        justifyContent:'space-between',
        borderTopWidth: 1,
    }

})