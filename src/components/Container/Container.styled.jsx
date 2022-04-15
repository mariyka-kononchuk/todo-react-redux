import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 1024px;
  }
`;
