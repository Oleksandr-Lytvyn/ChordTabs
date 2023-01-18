import styled from 'styled-components';

export const ListSuffixes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const ListItem = styled.li`
  background-color: ${(props) => (props.active ? 'palevioletred' : 'white')};
  border-radius: 2px;
  padding: 3px;
`;
// rgb(178, 209, 215)
