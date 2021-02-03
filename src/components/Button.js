import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  background: ${(props) => (props.primary ? 'blue' : 'red')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default PrimaryBtn;

export const SmallBtn = styled(PrimaryBtn)`
  padding: 0.5rem;
`;