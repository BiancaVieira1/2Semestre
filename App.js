import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

const image ={ uri: "https://s2.glbimg.com/i8VjhVl-vNMxp_TDUSQB2JJNo1I=/0x0:1029x1593/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/6/c/aQOMcrQCG36ysJ6dNCHg/ceu-colorido.png"};

export default function App() {
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState("");

async function carregaDados(){
  const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,time,forecast,max,min,date,description&key=c1a382c9&city_name=${cidade}`)
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
        <Text></Text>
         <Text style={styles.titulo}> Bem Vinda(o) a Previsão do Tempo</Text>
        </View>
        <Text></Text>
        <View style={styles.bloco}>
          <Text style={styles.label}> Cidade: </Text>
          <TextInput 
          placeholder=" Digite o nome da Cidade"
          style={styles.input}
          onChangeText = {(value)=>setCidade(value)}
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
    backgroundColor: '#fff',
     borderRadius: 10,
     opacity: 0.9
  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    top: 20
  },
  label:{
    fontSize: 20,
    top: 1
  },
  bloco:{
    marginTop: 30,
    marginLeft: '10%'
  },
  input:{
    borderBottomWidth: 2,
    width: '90%',
    fontSize: 20,
    top: 1
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
