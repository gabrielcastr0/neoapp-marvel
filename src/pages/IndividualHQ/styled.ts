import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const LeftImgArea = styled.div`
  height: 705px;
  width: 550px;
  border: 0;
`;

export const LeftImg = styled.img`
  width: 550px;
  height: 720px;
`;

export const RightArea = styled.div`
  flex: 1;
  height: 95px;
  margin-left: 10px;
`;

export const TitleComicArea = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #fff;
  border-radius: 5px;
`;

export const TitleComic = styled.h1`
  color: #000;
  font-weight: normal;
  padding: 0 10px 0 10px;
  font-size: 25px;
`;

export const DescriptionArea = styled.div`
  flex: 1;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  gap: 15px;
`;

export const DescriptionText = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
`;

export const PriceText = styled.p`
  display: flex;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 10px #000;
  gap: 5px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: #fff;
  height: 100px;
  border-radius: 5px;
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: green;
  box-shadow: 4px 5px 0 #000;
  color: #fff;
  font-size: 22px;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  gap: 10px;
  cursor: pointer;
`;

export const IconsQtdMinusArea = styled.div`
  display: flex;
`;

export const QtdText = styled.p``;

export const IconsQtdPlusArea = styled.div`
  display: flex;
`;

export const LoadingArea = styled.div`
  position: absolute;
  top: 100px;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.div`
  display: flex;
  width: auto;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin infinite 5s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;