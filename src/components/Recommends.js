import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = (props) => {
  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/51549B21334AB3968E620AB93B4F20F3D18D43E0C3B0655C775BA61819650A81/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            ></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6BB8E1DC494D04518BDB4DE0947B1CBC8D422508AF8D6A23C126BFBC661B8565/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            ></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFE48E37B40EFB566D56954C7E6281AE617FD116979EC8C30CE3523B292CC494/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            ></img>
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7495C41E9AC5318EC81CF3909632D535F1C411A4D451C616F130D3176FAB3F22/scale?width=400&aspectRatio=NaN&format=jpeg"
              alt=""
            ></img>
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
