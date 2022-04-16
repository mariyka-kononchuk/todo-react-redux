import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-left: 18px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.06em;

  background-color: rgb(165, 163, 163);
  color: white;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    padding-left: 45px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 48px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  margin-left: 100px;

  @media screen and (min-width: 768px) {
    margin-left: 185px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 200px;
  }
`;

export const Category = styled.p`
  display: flex;
  align-items: center;
  width: 145px;
`;

export const Status = styled.p`
  display: flex;
  align-items: center;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 145px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  color: rgb(92, 90, 90);
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  padding-left: 10px;
  padding-right: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  background-color: rgb(241, 241, 252);
`;
