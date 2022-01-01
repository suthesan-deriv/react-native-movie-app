import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector} from 'react-redux';
import { addToFavourites } from '../actions/actions';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const MovieDetails = ({route}) => {
    const dispatch = useDispatch()
    const favouritesId = useSelector(state => state.reducer.favourites.itemsId)
    const {id, directors, genres, title, year, contentRating, image, stars, plot} = route.params
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
            <View style={{marginRight: '10px', marginLeft: '10px'}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.yearRatingContainer}>
                    <Text style={styles.year}>{year}</Text>
                    <Text style={styles.contentRating}>{contentRating}</Text>
                </View>
                {!favouritesId.includes(id) && (
                    <View style={{marginTop: '20px'}} >
                        <Button title='add to favourites' onPress={() => dispatch(addToFavourites(route.params))}/>
                    </View>
                )}
                <View style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Text style={styles.plot}>{plot}</Text>
                </View>
                <View>
                    <Text style={styles.greySmall}>Cast: {stars}</Text>
                    <Text style={styles.greySmall}>Director(s): {directors}</Text>
                    <Text style={styles.greySmall}>Genre: {genres}</Text>
                </View>
            </View>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '100%',
    },
    titleContainer: {
        width: '100%',
        marginTop: '12px',
        marginBottom: '2px',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    year: {
        color: 'white',
        marginRight: 10,
    },
    contentRating: {
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 2,
    },
    plot: {
        color: 'white',
    },
    yearRatingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 198,
        height: 270,
    },
    greySmall: {
        color: 'grey',
        fontSize: 12,
    }
  });

  export default MovieDetails