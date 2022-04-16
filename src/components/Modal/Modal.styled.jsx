import styled from '@emotion/styled';

export const Overlay = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 0;
    display: flex;

    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: scroll;
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;

export const WindowModal = styled.div`
  position: absolute;

  width: 280px;
  min-height: 200px;

  padding: 25px 20px;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);

  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    padding: 30px 30px;
    width: 750px;
    min-height: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 850px;
    min-height: 120px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 3px;
`;
