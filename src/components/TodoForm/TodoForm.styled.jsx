import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  padding-top: 20px;
  color: rgb(165, 163, 163);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: 0.06em;
`;

export const Input = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  width: 200px;
  height: 25px;
  border: 1px solid rgb(165, 163, 163);

  &:focus {
    outline: none;
    border: 2px solid rgb(92, 90, 90);
  }
`;

export const Select = styled.select`
  margin-right: 10px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgb(165, 163, 163);

  &:focus {
    outline: none;
    border: 2px solid rgb(92, 90, 90);
  }
`;

export const Textarea = styled.textarea`
  margin-right: 10px;
  border-radius: 5px;
  width: 300px;
  border: 1px solid rgb(165, 163, 163);

  &:focus {
    outline: none;
    border: 2px solid rgb(92, 90, 90);
  }
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
    width: 110px;
  }

  cursor: pointer;

  &:hover {
    width: 112px;
    background-color: rgb(165, 163, 163);
    color: white;
    border: 2px solid rgb(165, 163, 163);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  &:focus {
    width: 112px;
    outline: none;
    border: 2px solid rgb(165, 163, 163);
    background-color: white;
    color: rgb(92, 90, 90);
  }
`;
