import React from 'react'
import styled, {css} from 'styled-components';
import redPercent from '../assets/red-percent.svg'
import greenPercent from '../assets/green-percent.svg'

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;

`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #555;
  
`;

export const LoginText = styled.div`
font-size: 4rem;
color: red;
text-shadow: 0 4px 1px #00BAF0;
padding-top: 2rem;`
const Div = styled.div``;

export const HeaderLogo = styled.img`
width:170px`
const ImageLogo = styled.img`
height:56px`
export const BigImage = styled.img`
height:80%;
width:100%`
const SmallImg = styled.img`
height:18px;margin-right:4px`

const FlexBox = styled.div`
display:flex;
justify-content:space-between;`

const FlexBoxAround = styled.div`
display:flex;
justify-content:space-around`

const getColumnSize = (col) => css`
  flex: 0 0 ${(col / 12) * 100}%;
  max-width: ${(col / 12) * 100}%;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
  background-color:#00BAF0;
  padding: 1rem;
  border-radius: 0.5rem;
  min-width: 4rem;
  text-align: center;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
export const LoginButton = styled.div`
width:10%;
margin-top: 10%;
margin-left: auto;
margin-right: auto;`

export const CenterDiv = styled.div`text-align: center;
    padding: 1.5rem;
    margin-top: 10%;
    height: 100vh`
export const Column = styled.div`
  padding: 8px;
  box-sizing: border-box;

  /* Default styles for all screen sizes */

  @media (min-width: 576px) {
    ${props => props.sm && getColumnSize(props.sm)}
  }

  @media (min-width: 768px) {
    ${props => props.md && getColumnSize(props.md)}
  }

  @media (min-width: 992px) {
    ${props => props.lg && getColumnSize(props.lg)}
  }

  @media (min-width: 1200px) {
    ${props => props.xl && getColumnSize(props.xl)}
  }
`
export const BlockDiv = styled.div`display:block;`
export const Row = styled.div``

export const Column2 = styled.div`
width:100%;

@media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    .col-1{
      width: 8.33%;
    }
    .col-2{
        width: 16.66%;
      }
    .col-3{
    width: 25%;
    }
    .col-4{
        width: 33.33%;
    }
    .col-5{
        width: 41.66%;
    }
    .col-6{
        width: 50%;
    }
    .col-7{
        width: 58.33%;
        }
    .col-8{
        width: 66.66%;
    }
    .col-9{
        width: 75%;
        }
    .col-10{
        width: 83.33%;
    }
    .col-11{
        width: 91.66%;
        }
    .col-12{
        width: 100%;
    }}`
      
    

const CardStyle = ({ price, icon, percentage, symbol, time, prevPrice }) => {
  const [integerPart, decimalPart] = price.toString().split('.');

  // Combine the integer part and the first two characters of the decimal part
  const truncatedPrice = `${integerPart}.${decimalPart.slice(0, 4)}`;

  const [prevIntegerPart, prevDecimalPart] = prevPrice.toString().split('.');

  // Combine the integer part and the first two characters of the decimal part
  const truncatedPrevPrice = `${prevIntegerPart}.${prevDecimalPart.slice(0, 4)}`;

  return (
    <CardContainer>
        <FlexBox>
   <Div> <ImageLogo src={icon}></ImageLogo>
      <Title>{symbol}</Title></Div>
       <Div><Title>{truncatedPrice}</Title>
      <Content>{percentage > 0? <SmallImg src={greenPercent}/>: <SmallImg src={redPercent}/>}{percentage}</Content>
     
      </Div>
    
        </FlexBox>
        <FlexBoxAround>
      <Content> Price as at {time}</Content><Content>{truncatedPrevPrice}</Content>
      </FlexBoxAround>
      
    </CardContainer>
  );
};

export default CardStyle;