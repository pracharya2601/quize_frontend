import styled from 'styled-components';
import px2vw from 'utils/other/px2vw';

export const StyledButton = styled.button`
  background: ${props => props.outline ? props.theme.white : props.color || props.theme.primary};
  color: ${props => props.outline ? props.color || props.theme.primary : props.theme.white};
  padding: 0.25em 1em;
  font-size: 1.5rem;
  border: 2px solid ${props => props.color || props.theme.primary};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
      opacity: 0.8;
  }
`;