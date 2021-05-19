import styled from 'styled-components';

export const Box = styled.div`
  padding: 40px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  border-right: 1px solid #333333;
`;


export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,
                         minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  font-style: Italic;
  text-decoration: none;

  &:hover {
      color: gold;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  &:hover {
      color: gold;
      transition: 200ms ease-in;
  }
`;
