import styled from 'styled-components';
import theme from './theme';

const Button=styled.button`
  cursor:pointer;
  outline:0;
  border:0;
  border-radius:2px;
  &:focus,&:active{
    background:${theme.colors.red};
  }
`;

export default Button;