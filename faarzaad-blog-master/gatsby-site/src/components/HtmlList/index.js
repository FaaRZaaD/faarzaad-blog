import React from "react"
import { Link } from "gatsby"
import { ContentContainer, ListContainer } from "./styles"

import { listItems } from "../../pages/html"

function List() {
  return (
    <ContentContainer>
      <ListContainer>
        {listItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.tab}</Link>
          </li>
        ))}
      </ListContainer>
    </ContentContainer>
  )
}

export default List
