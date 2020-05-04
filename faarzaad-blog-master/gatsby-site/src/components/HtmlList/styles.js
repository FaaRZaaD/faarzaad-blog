import styled from "styled-components"

const ContentContainer = styled.div`
  width: 100%;
  padding-top: 130px;
`
const ListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  text-align: center;
  font-family: "Vazir";
  font-size: 20px;
  & > li {
    margin-bottom: 40px;
    font-weight: bold;
  }
  & > li > a:hover {
    color: yellow;
    border-bottom: 1px solid yellow;
  }
`

export { ContentContainer, ListContainer }
