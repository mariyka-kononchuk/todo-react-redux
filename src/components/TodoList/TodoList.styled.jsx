import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-left: 18px;

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

export const Name = styled.p`
  display: block;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 116px;
  }

  @media screen and (min-width: 1024px) {
    width: 178px;
  }
`;

export const InfoTitle = styled.p`
  display: block;
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 82px;
  }

  @media screen and (min-width: 1024px) {
    width: 147px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 103px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 74px;
  }
`;
export const StyledLink = styled(NavLink)``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  color: rgb(92, 90, 90);
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  list-style: none;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;

  text-align: center;
  width: 100px;
  height: 24px;
  background-color: white;
  color: rgb(92, 90, 90);

  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.117;

  border-radius: 5px;
  border: 1px solid rgb(165, 163, 163);

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 100px;
  }

  cursor: pointer;

  &:hover {
    background-color: rgb(165, 163, 163);
    color: white;
    border: 2px solid rgb(165, 163, 163);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
    border: 2px solid rgb(165, 163, 163);
    background-color: white;
    color: rgb(92, 90, 90);
  }
`;
