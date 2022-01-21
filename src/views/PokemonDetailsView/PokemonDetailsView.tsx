/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const PokemonDetailsView = (props: any) => {

  /* 2. Get the param */
  const { id, name, src } = props.route.params;
  const [weight, setWeight] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [arrayTypes, setArrayTypes] = useState([]);


  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id]);

  const fetchPokemonDetail = (idPokemon: number) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + idPokemon;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json.results);
        setHeight(json.height);
        setWeight(json.weight);

        setArrayTypes = (json.types.map((item: any) => {
          return item.type.name;
        }));

      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  return (
    <View>
     <Text>Hello this is a detailed view of Pokemon</Text>
     <Text>Name: {name} and ID: {id}</Text>
     <Text>Weight: {weight} and Height: {height}</Text>
     {arrayTypes.length !== 0 &&
     arrayTypes.map((item, index) =>
      <Text key={index}>{item}</Text>
     )}

     <Image source={{uri: src}} style={styles.imagePokemon} />

    </View>
  );
};

const styles = StyleSheet.create({
  imagePokemon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 300,
    width: 300,
  },
});

export default PokemonDetailsView;
