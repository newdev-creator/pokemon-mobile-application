/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as commonStyle from '../../utils/commonStyle';

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

import { Card, ListItem, Icon } from 'react-native-elements';

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
        setArrayTypes(json.types.map((item: any) => {
          return item.type.name;
        }));

      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  return (
    <View>
     <Card>
       <Card.Title>{name}</Card.Title>
       <Card.Divider/>
       <View>
         <View style={{alignItems: 'center'}}>
            <Image style={styles.imagePokemon}
                  source={{uri: src}}
            />
         </View>
        <View style={styles.detail_container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Height: {height}</Text>
            <Text>Weight: {weight}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Type:
              {arrayTypes.length !== 0 &&
              arrayTypes.map((item, index) => <Text key={index}>{item} & </Text>)
              }
            </Text>
          </View>
        </View>
       </View>
     </Card>
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
  detail_container: {
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    ...commonStyle.elevationButton,
  },
});

export default PokemonDetailsView;
