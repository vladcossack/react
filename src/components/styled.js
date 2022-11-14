import styled from 'styled-components';
import img from '../assets/img/background.jpg';
import {Link} from 'react-router-dom';

export const AddMovie = styled.button`
    position: absolute;
    right: 0;
    width: 182px;
    padding: 10px 0;
    color: #f65261;
    background-color: rgba(76, 74, 74, 0.7);
    font-size: 18px;
`;

export const CategoriesWrapper = styled.div`
    display: flex;
`;

export const Category = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
`;

export const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 30px;
`;

export const SearchForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

export const SearchInput = styled.input`
    width: 73%;
    background-color: #1d1c1c;
    color: #ffffff;
    padding: 16px 10px;
    opacity: 0.9;
    font-size: 18px;
`;

export const SearchBtn = styled.button`
    width: 25%;
    padding: 12px 0;
    font-size: 18px;
    background-color: #f65261;
    color: #ffffff;
    text-align: center;
`;

export const Footer = styled.footer`
    background-color: #424242;
    padding: 16px;
`;

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 450px;
    background-image: url(${img});
    z-index: -1;
    background-size: cover;
    &:before {
    content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6787902661064426) 0%, rgba(0,0,0,0.7) 100%);
        opacity: .9; 
  }
`;

export const MovieCard = styled.div`
    background-color: #232323;
    width: 30%;
    margin-bottom: 50px;
    color: #a2a2a2;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 320px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        height: 380px;
  }
    @media (min-width: 1200px) {
        height: 520px;
  }
`;

export const Year = styled.span`
    border: 1px solid #555555;
    padding: 0 10px;
    border-radius: 5px;
    position: absolute;
    top: 15px;
    right: 0;
`;

export const DescriptionWrapper = styled.div`
    position: relative;
    font-size: 16px;
    color: #a2a2a2;
`;

export const Genre = styled.p`
    font-size: 14px;
`;

export const MoviesSection = styled.section`
    background-color: #232323;  
`;

export const Navigation = styled.nav`
    border-bottom: 2px solid #4c4c4c;
    position:relative;
    display: flex;
    justify-content: space-between;

    &:after {
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background: #000000;
        position: absolute;
        bottom: -4px;
  }
`;

export const MoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
`;

export const SearchResults = styled.h3`
    color: #ffffff;
    padding: 22px 0;
    font-size: 16px;
`;

export const MoviesAmount = styled.span`
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
`;

export const SortingWrapper = styled.div`
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    &:after {
        content: '\A';
        color: #f65261;
        right: 0;
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 4px 6px 4px 0;
        border-color: transparent #f65261 transparent transparent;  
        display: inline-block;
        vertical-align: middle;
        transform: rotate(270deg);
}
`;

export const SortingTitle = styled.span`
    color: #505050; 
    margin-right: 20px;
`;

export const SortingValue = styled.select`
    background: #232323;
    border: none;
    color: #ffffff;
    appearance: none;
    padding-right: 8px;
`;

export const OoopsText = styled.h2`
    width: 90%;
    margin: 0 auto;
    padding: 70px 20px;
    background: #1d1d1d;
    color: #e40909;
    margin-bottom: 8px;
    text-align: center;
`;

//modals with form
export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ModalWindow = styled.div`
    position: fixed;
    color: #ffffff;
    background: #232323;
    width: 65%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9;
    padding: 50px 60px;
`;

export const ModalClose = styled.div`
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    &:after, &:before {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #ffffff;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export const ModalTitle = styled.h3`
    font-size: 32px;
`;

export const ModalForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const FormItem = styled.label`
    display: block;
    color: #f65261;
    width: 100%;
    font-size: 16px;
    margin: 8px 0;
`;

export const FormInput = styled.input`
    display: block;
    width: 100%;
    background: #424242;
    padding: 10px;
    margin-top: 5px;
    color: #ffffff;
`;

export const BtnWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 60px;
`;

export const SubmitBtn = styled.button`
    padding: 10px 30px;
    border-radius: 3px;
    color: #ffffff;
    background: #f65261;
`;

export const CancelBtn = styled.button`
    background: transparent;
    color: #f65261;
    border: 1px solid #f65261;
    padding: 10px 30px;
    margin-right: 10px;
    border-radius: 3px;
`;

// movie modal
export const MovieIcon = styled.div`
    display: none;
    width: 40px;
    height: 40px;
    background: #232323;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const MovieModal = styled.div`
padding-top: 30px;
    width: 200px;
    height: 120px;
    background: #232323;
    border-radius: 3px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9;
`;

export const MovieModalClose = styled.div`
    position: absolute;
    right: 25px;
    top: 20px;
    width: 20px;
    height: 20px;
    z-index: 9;
    &:after, &:before {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 15px;
        width: 2px;
        background-color: #ffffff;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export const MovieModalBtn = styled.div`
    width: 100%;
    padding: 5px 0 5px 35px;
    color: #ffffff;
    &:hover {
        background: #f65261;
    }
`;

// movie details
export const MovieDetailsBlock = styled.div`
    padding: 30px 0;
`;

export const MovieDetailsBackground = styled.div`
    position: absolute;
    width: 100vw;
    height: 510px;
    background-image: url(${img});
    z-index: -1;
    background-size: cover;
    &:before {
    content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000000;
        opacity: 0.85;
  }
`;

export const MovieDetailsWrapper = styled.div`
    padding: 40px 0;
    display: flex;
`;

export const MovieDetailsContent = styled.div`
    padding: 20px 0 0 40px;
    color: #ffffff;
    font-size: 16px;
    height: 340px;
    overflow: scroll;
`;

export const MovieDetailsTitle = styled.h3`
    font-size: 48px;
    line-height: 1;
`;

export const MovieDetailsTitleWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 48px;
    margin-bottom: 10px;
`;

export const MovieDetailsRaiting = styled.div`
    font-size: 28px;
    color: #018401;
    border: 1px solid #ffffff;
    border-radius: 50%;
    padding: 2px 10px;
    margin-left: 30px;
`;

export const MovieDurationAndYear = styled.div`
    color: #f65261;
    width: 170px;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    margin: 15px 0;
`;

export const MovieDetailsImg = styled.img`
    height: 340px;
`;

// 404 page not found
export const PnfWrap = styled.div`
    height: 100vh;
    background-color: #121212;
`;

export const PnfContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 20%;
`;

export const PnfTitle = styled.h1`
    color: #ffffff;
    text-align: center;
    font-size: 48px;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
`;

export const PnfBtn = styled.button`
    color: #f65261;
    font-size: 24px;
    border: 1px solid #f65261;
    background: transparent;
    margin: 0 auto;
    display: block;
    padding: 10px 25px;
    margin-top: 40px;
`;
