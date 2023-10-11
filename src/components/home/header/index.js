import React from "react";
import { Button, CommonMargin } from "../../common";
import {
  BreadcrumbLink,
  BreadcrumbText,
  HeaderActions,
  HeaderBreadcrumb,
  HeaderDetails,
  HeaderHeading,
} from "./header.styled";

const Header = () => {
  return (
    <Header>
      <CommonMargin>
        <HeaderBreadcrumb>
          <BreadcrumbText>Orders</BreadcrumbText>
          <BreadcrumbLink>Order 32457ABC</BreadcrumbLink>
        </HeaderBreadcrumb>
        <HeaderDetails>
          <HeaderHeading>Order 32457ABC</HeaderHeading>
          <HeaderActions>
            <Button>Back</Button>
            <Button variant={"filled"}>Approve order</Button>
          </HeaderActions>
        </HeaderDetails>
      </CommonMargin>
    </Header>
  );
};

export default Header;

