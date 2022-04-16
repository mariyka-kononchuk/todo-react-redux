import styled from '@emotion/styled';

export const StatusWrapper = styled.div`
  display: flex;
  margin-left: 200px;
  color: rgb(92, 90, 90);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* margin: 0;
  padding: 0; */
  display: flex;
  align-items: center;
  width: 100px;
  /* text-align: center; */
  /* vertical-align: middle; */
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.06em;

  color: rgb(54, 54, 54);

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 145px;
  }
`;

export const Status = styled.p`
  display: flex;
  align-items: center;
  width: 145px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.167;
  letter-spacing: 0.06em;
`;
