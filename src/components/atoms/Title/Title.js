import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fs.xl};
  font-weight: 400;
  margin-bottom: 1em;
`;
