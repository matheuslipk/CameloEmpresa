import { Dimensions, StatusBar } from 'react-native';

const cor1 = '#FF512F';
const cor2 = '#DD2476';
const cor3 = '#D3CCE3';
const cor4 = '#E9E4F0';


export const cores = {
  primaria: '#AAF',
  secundaria: cor4,
  linkPrimario: '#555',
  header: '#6b52ae',
  tinkColorHeader: '#fff',
  textLabelInput: '#888',
  danger: '#F55',
};

export const degrades = {
  d1: [cor3, cor4],
  d2: [cor1, cor2],
};

export const tamanhos = {
  alturaHeader: 55,
  alturaBarraStatus: StatusBar.currentHeight,
  larguraTela: Dimensions.get('window').width,
  alturaTela: Dimensions.get('window').height,
};

export const varAsyncStorage = {
  usuario: '@usuario',
  email: '@email',
  senha: '@senha',
  token: '@token',
  store: '@store',
};

export const stylesComponents = {
  inputcontainer: {
    borderColor: '#000',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#FFFFFF88',
    marginHorizontal: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
  },
};
