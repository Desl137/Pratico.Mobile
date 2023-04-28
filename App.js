import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import axios from 'axios';

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.otaviolube.com/api/filmes',
      );
      setMovies(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Card key={movie.id} containerStyle={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{ uri: movie.attributes.image }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {movie.attributes.titulo}
                </Text>
                <Text style={styles.sinopse}>
                  {movie.attributes.sinopse}
                </Text>
              </View>
            </View>
            <Icon name='heart' type='font-awesome' color='#f50' />
          </Card>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sinopse: {
    textAlign: 'center',
  },
});

export default MovieCard;



