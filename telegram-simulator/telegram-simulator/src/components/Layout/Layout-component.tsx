import React from "react";
import { LayoutContainer } from "./Layout-styles";
import { Columns } from "braid-design-system";
import { Column } from "braid-design-system";
import { Card } from "braid-design-system";
import { Text } from "braid-design-system";

function Layout() {
  return (
    <LayoutContainer>
      <Columns collapseBelow="tablet" space="small">
        <Column width="1/3">
          <Card>
            <Text>Sidebar</Text>
          </Card>
        </Column>
        <Column>
          <Card>
            <Text>Main content</Text>
          </Card>
        </Column>
      </Columns>
    </LayoutContainer>
  );
}

export default Layout;
