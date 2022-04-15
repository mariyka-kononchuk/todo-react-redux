import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 25px;
  background-color: rgb(241, 241, 252);
`;

export const Icon = styled.div`
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

export const Name = styled.p`
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

export const Date = styled.p`
  display: block;
  width: 100px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.06em;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 145px;
  }
`;

export const Category = styled.p`
  display: block;
  width: 100px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.06em;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 145px;
  }
`;

export const Content = styled.p`
  margin-right: 10px;
  white-space: nowrap;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.06em;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 135px;
  }

  &:hover {
    white-space: normal;
    margin-right: 0;
    overflow: visible;
    width: 145px;
    @media screen and (min-width: 768px) {
      width: 100px;
    }

    @media screen and (min-width: 1024px) {
      width: 145px;
    }
  }
`;

export const Dates = styled.p`
  display: block;
  width: 100px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.06em;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 145px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: 55px;
  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 55px;
  }
`;
