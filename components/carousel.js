import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const {width: windowWidth} = Dimensions.get('window');
const INITIAL_INDEX = 0;

export default function ImageCarousel({navigation, data, title}) {
    
  const carouselRef = useRef(null);
  function renderItem({item, index}) {
    const {image} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
          navigation.navigate('MovieDetails', {...item});
        }}>
        <ImageBackground source={{uri: image}} style={styles.imageBackground}/>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {(data && data.items.length > 0) && (
        <>
            <Text style={styles.titleText}> {title} </Text>
            <Carousel
            style={styles.carousel}
            data={data.items}
            renderItem={renderItem}
            itemWidth={0.7 * windowWidth}
            inActiveOpacity={0.3}
            containerWidth={windowWidth}
            ref={carouselRef}
            />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 20},
  carousel: {
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  }, 
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
});