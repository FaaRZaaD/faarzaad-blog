import React from "react"

import { NavContainer, Profile, MyName, TopBar } from "./styles"
import Prof from "../../../content/images/photo_۲۰۱۹-۰۶-۲۳_۰۷-۱۲-۴۴.jpg"

function Nav() {
  return (
    <NavContainer>
      <MyName>فرزاد گل عنبری</MyName>
      <TopBar>
        <MyName>وبلاگ</MyName>
        <MyName>درباره</MyName>
        <MyName>
          <Profile src={Prof} />
        </MyName>
      </TopBar>
    </NavContainer>
  )
}

export default Nav
