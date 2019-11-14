import styled from 'styled-components/native';
import { cores } from '../constantes';

export default styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${cores.primaria};
  width: 70;
  height: 70;
  border-radius: 40;
`;
