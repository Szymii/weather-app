import styled from 'styled-components';

export const FormField = styled.input`
  position: absolute;
  top: 0;
  right: 1.8em;
  height: 100%;
  font-size: ${({ theme }) => theme.fs.xm};
  width: calc(100% - 7em);
  max-width: 30em;
  padding: 0.3em 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.middle};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  visibility: hidden;
`;
