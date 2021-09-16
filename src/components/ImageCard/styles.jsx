import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  width: 90px;
  height: 90px;
  padding: 10px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.h4`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
`;
