import styled from "styled-components";

export const Div = styled.nav`
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    margin: 0 0.5vw;
  }
`;

export const Contain = styled.div`
  background: url(/images/back-img.png);
  height: 80vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Logo = styled.div`
  font-size: 5vh;
  padding: 10px 0;
`;
export const List = styled.div``;

export const Ul = styled.ul`
  justify-content: space-between;
  display: flex;
  list-style-type: none;
`;
export const Li = styled.li`
  margin: 0 1.5vw;
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
`;
export const Button = styled.button`
  background-color: #f9c51c;
  padding: 12px 18px;
  gap: 10px;
  border: none;
  font-family: "Outfit";
  font-weight: bold;
`;
export const Secondsection = styled.div`
  border: solid black;
`;

// .menu-icon {
//   display: none;
// }
/* @media only screen and (max-width: 800px) {
    .List ul {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      position: absolute;
      background-color: lightgray;
      right: 0;
    }
    .btn {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 25px;
      padding: 20px;
      right: 0;
    }
    .logo {
      position: relative;
      right: 28vw;
    }
    .menu-icon {
      display: block;
    }
  } */
