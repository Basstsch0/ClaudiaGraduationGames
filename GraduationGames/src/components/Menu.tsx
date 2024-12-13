import React from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  padding: 10px 20px;
  margin: 5px 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface MenuProps {
  onSelect: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onSelect }) => {
  return (
    <div>
      <MenuButton onClick={() => onSelect("DisallowedWords")}>
        Disallowed Words
      </MenuButton>
      <MenuButton onClick={() => onSelect("Similarities")}>
        Similarities
      </MenuButton>
      <MenuButton onClick={() => onSelect("AdminPage")}>Admin Page</MenuButton>
    </div>
  );
};

export default Menu;
