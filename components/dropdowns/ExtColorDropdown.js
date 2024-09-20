"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ExteriorColorDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 3 ? <p>Ext Color: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Ext Color"}</p>}
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="multiple select"
        variant="ghost"
        closeOnSelect={false}
        disallowEmptySelection={false}
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className={styles.menu}
      >
        <DropdownItem key="Black" className={styles.item} selectedIcon={selectedKeys.has("Black") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Black
        </DropdownItem>
        <DropdownItem key="Blue" className={styles.item} selectedIcon={selectedKeys.has("Blue") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Blue
        </DropdownItem>
        <DropdownItem key="Gray" className={styles.item} selectedIcon={selectedKeys.has("Gray") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Gray
        </DropdownItem>
        <DropdownItem key="Silver" className={styles.item} selectedIcon={selectedKeys.has("Silver") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Silver
        </DropdownItem>
        <DropdownItem key="White" className={styles.item} selectedIcon={selectedKeys.has("White") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          White
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
