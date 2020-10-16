import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) => {
    
        const [dropdownOpen, setOpen] = useState(false);
      
        const toggle = () => setOpen(!dropdownOpen);
      
        return (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="primary">
                Text
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Choose One</DropdownItem>
                        <DropdownItem>Vegetables</DropdownItem>
                        <DropdownItem>Cheese</DropdownItem>
                        <DropdownItem>Meats</DropdownItem>
                        <DropdownItem>Bread</DropdownItem>
                        <DropdownItem>Chips</DropdownItem>
                        <DropdownItem>Drinks</DropdownItem>
                        <DropdownItem>Misc</DropdownItem>
                        <DropdownItem>Dairy</DropdownItem>
                        <DropdownItem>Frozen</DropdownItem>
                    </DropdownMenu>
          </ButtonDropdown>
        );
}


export default DropDown;