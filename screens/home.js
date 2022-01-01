import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CarouselComponent from '../components/carousel'
import React from 'react';
import { loadComingSoon } from '../actions/actions';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const coming_soon = useSelector(state => state.reducer.coming_soon)
    const favourites = useSelector(state => state.reducer.favourites)

    React.useEffect(() => {
        dispatch(loadComingSoon())
    },[])

    return (
        <View style={styles.container}>
          <CarouselComponent navigation={navigation} data={coming_soon} title="Movies Coming Soon"/>
          <CarouselComponent navigation={navigation} data={favourites} title="Your Favourites"/>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Home