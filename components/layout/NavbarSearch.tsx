import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";

export default function NavbarSearch() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput type="text" placeholder="What are you looking for?" />
    </InputGroup>
  );
}
