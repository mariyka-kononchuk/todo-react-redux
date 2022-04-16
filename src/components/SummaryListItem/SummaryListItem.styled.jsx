import styled from '@emotion/styled';

export const StatusWrapper = styled.div`
  display: flex;
  margin-left: 200px;
  color: rgb(92, 90, 90);
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;

  background-color: rgb(92, 90, 90);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

export const Category = styled.p`
  display: block;
  width: 100px;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.06em;

  color: rgb(54, 54, 54);

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 180px;
  }
`;

export const Status = styled.p`
  display: block;
  width: 145px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.167;
  letter-spacing: 0.06em;
`;
