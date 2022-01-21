/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
import {listPokeOriginal} from '../../data/PokemonList';

import {Pokemon} from '../../models/Pokemon';
import * as commonStyle from '../../utils/commonStyle';
import { getRandomInt, shuffle } from '../../utils/utils';

const HomeView = (props: any) => {
  const [counterPokedex, setCounterPokedex] = useState(0);
  const [listPoke, setListPoke] = useState<Pokemon[]>(undefined);
  const [isDataReceived, setDataReceived] = useState(false);

  console.log('Props: ', props);

  const onViewPokemonDetails = (idPokemon: number, namePokemon: string, srcPokemon: string) => {
    props.navigation.navigate('Details', {id: idPokemon, name: namePokemon, src: srcPokemon});
  };

  const getNamePokemon = (namePokemon: string) => {
    console.log('My name is ', namePokemon);
    console.log('My neighbour is ', listPoke[counterPokedex + 1].name);
  };

  const modifyLevel = () => {
    // TODO: Un seul des trois starters !
    let newArr = [...listPoke];
    newArr[counterPokedex].level = listPoke[counterPokedex].level + 5;
    setListPoke(newArr);
  };

  const onNext = () => {
    if (counterPokedex === listPoke.length - 1) {
      setCounterPokedex(0);
    } else {
      setCounterPokedex(counterPokedex + 1);
    }
  };

  const onPrevious = () => {
    if (counterPokedex === 0) {
      setCounterPokedex(listPoke.length - 1);
    } else {
      setCounterPokedex(counterPokedex - 1);
    }
  };

  const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json.results);
        const newArray = json.results.map((pokemon: any, index: number) => {
          //TODO: level between 40 & 60
          let indexPokedex = index + 1;
          let pokeName = pokemon.name;
          pokemon.id = indexPokedex;
          pokemon.level = getRandomInt(1, 80);
          pokemon.isMale = getRandomInt(0, 1) === 0 ? true : false;
          pokemon.src =
            'https://img.pokemondb.net/artwork/' +
            pokeName +
            '.jpg';

          return pokemon;
        });
        setListPoke(shuffle(newArray));
        setDataReceived(true);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View style={styles.main_container}>
      <View style={styles.title_container}>
        <Text style={styles.text_title}>Pokédex Application</Text>
      </View>

      <View style={styles.pokemon_container}>
        {isDataReceived ? (
          <PokemonInfo
            id={listPoke[counterPokedex].id}
            name={listPoke[counterPokedex].name}
            level={listPoke[counterPokedex].level}
            isMale={listPoke[counterPokedex].isMale}
            src={listPoke[counterPokedex].src}
            onClickPokemon={onViewPokemonDetails}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.buttonNextPrevious}
          onPress={() => onPrevious()}>
          <Image
            source={require('../../assets/icons/left-arrow.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonNextPrevious}
          onPress={() => onNext()}>
          <Image
            source={require('../../assets/icons/right-arrow.png')}
            style={styles.iconButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PokemonInfo = ({id, name, level, isMale, src, onClickPokemon}: Pokemon) => {
  return (
    <>
      <Text style={styles.text_appeared}>A new Pokemon appeared !</Text>
      <TouchableOpacity onPress={() => onClickPokemon(id, name, src)}>
        <Image source={{uri: src}} style={styles.imagePokemon} />
      </TouchableOpacity>
      <Text>
        His name is {name}, his level is {level}
      </Text>
      {isMale ? <Text>This is a male</Text> : <Text>This is a female</Text>}
    </>
  );
};

//== STYLES == //
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  title_container: {
    flex: 1,
    alignItems: 'center',
  },

  pokemon_container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text_title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgb(200, 0, 0)',
    marginTop: 30,
  },

  imagePokemon: {
    width: 200,
    height: 200,
  },

  iconButton: {
    width: 40,
    height: 40,
  },

  text_appeared: {
    marginBottom: 20,
    fontStyle: 'italic',
    fontSize: 18,
  },

  //@ts-ignore
  buttonNextPrevious: {
    ...commonStyle.elevationButton,
    ...commonStyle.roundedButton,
  },
});

export default HomeView;
