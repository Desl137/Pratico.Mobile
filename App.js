import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardFilme from './src/components/CardFilme';

export default function App(){

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return(
    <View style={styles.container}> 
      {filmes.length > 0 ? filmes.map(filme => <CardFilme filme={filme.attributes}/>):
       <Text style={{}}>Carregando ...</Text>}
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

