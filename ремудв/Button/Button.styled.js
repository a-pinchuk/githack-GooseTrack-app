import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;
  background-color: ${p =>
    p.disabled === 'true' ? p.theme.colors.muted : p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  cursor: pointer;

  :hover,
  :focus:not(:disabled) {
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: ${p => p.disabled !== 'true' && p.theme.shadows.boxShadow};
  }
`;
