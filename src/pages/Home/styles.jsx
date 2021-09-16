import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 1rem;
  font-size: 1.6rem;
`;

export const Logo = styled.img`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

export const MapContainer = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 29px;
  margin: 1.6rem 0;
`;

export const ModalTitle = styled.h2`
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: bold;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;

  margin-bottom: 1rem;
`;

export const ModalContent = styled.h2`
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: normal;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 19px;

  margin-bottom: 1rem;
`;
