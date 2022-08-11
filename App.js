import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

const image ={ uri: "https://th.bing.com/th/id/R.246ec445d763797545aa558fd3953e20?rik=Sa0%2f6cPVOmPC2A&pid=ImgRaw&r=0"};

export default function App() {
  const [dados, setDados] = useState("");


async function carregaDados(){
  const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=c1a382c9&city_name=mongagua,SP`)
   setDados(response.data.forecast[0]);
}
  return (
    <View style={styles.container}>
      <ImageBackground style={{
      position: "absolute",
      height: '100%',
      width: '100%'
    }}source={image}>
</ImageBackground>
      <View>
         <Text style={styles.titulo}> Bem Vinda(o) á </Text>
          <Text style={styles.titulo}> Previsão do Tempo</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.label}> Cidade: </Text>
          <TextInput 
          placeholder="Digite o nome da Cidade"
          style={styles.input}
          />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao} onPress={carregaDados}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>

      <View style={styles.bloco}>
         <Tempo data={dados}/>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED'
  },
  titulo:{
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    top: 20
  },
  label:{
    fontSize: 20,
    top: 10
  },
  bloco:{
    marginTop: 30,
    marginLeft: '10%'
  },
  input:{
    borderBottomWidth: 2,
    width: '80%',
    fontSize: 20,
    top: 10
  },
  botao:{
    width: '80%',
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 30
  },
  textoBotao:{
    fontSize: 20,
    color: '#FFF'
  }
});
