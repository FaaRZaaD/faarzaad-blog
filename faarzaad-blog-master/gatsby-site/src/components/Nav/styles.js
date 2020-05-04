import styled from "styled-components"

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #cccccc ;
`
const MyName = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  font-family: "Vazir";
  color: white ;
`
const TopBar = styled.div`

  display: flex;
  align-items: center;
  overflow: hidden;
  & > div {
    margin-right: 35px ;
    font-size: 16px ;
  }
`
const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 25px ;
`

export { NavContainer, MyName, TopBar, Profile }
