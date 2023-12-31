import styled from "styled-components";

export const SearchInput = styled.input`
 display: inline-block;
 
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  border-color: #586974;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;}
`

export const SearchBtn = styled.button`
width: 80px;
height: 30px;`


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #235874;
  border-radius: 3px;
  overflow: hidden;
`;

// export const SearchFormButton = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     opacity: 1;
//   }
// `;
// export const SearchFormInput = styled.input`
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;

//   ::placeholder {
//     font: inherit;
//     font-size: 18px;
//   }
// `;