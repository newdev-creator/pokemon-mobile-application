/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as commonStyle from '../../utils/commonStyle';

import React, { useEffect, useState } from 'react';
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

import { Card, ListItem, Icon } from 'react-native-elements';
import { listPokeOriginal } from '../../data/PokemonList';

const MyPokemonView = (props: any) => {

  const onViewPokemonDetails = (idPokemon: number, namePokemon: string, srcPokemon: string) => {
    props.navigation.navigate('Details', { id: idPokemon, name: namePokemon, src: srcPokemon });
  };

  return (
    <View>
      <FlatList
        data={listPokeOriginal}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <PokemonItem pokemon={item} onclickPokemon={onViewPokemonDetails} />}
      />
    </View>
  );
};

const PokemonItem = (props: any) => {

  const { pokemon, onclickPokemon } = props;

  return (
    <View>
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => onclickPokemon(pokemon.id, pokemon.name, pokemon.src)}>
        <Image style={styles.image} source={{ uri: pokemon.src }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{pokemon.name}</Text>
          </View>
          <View>
            <Text style={styles.level_text}>
              Level: {pokemon.level}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePokemon: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  details_container: {
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    ...commonStyle.elevationButton,
  },

  main_container: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
  divider_pokemon: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },

  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  level_text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
    color: '#666666',
  },
});

export default MyPokemonView;
