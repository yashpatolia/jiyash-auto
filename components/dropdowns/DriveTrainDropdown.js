"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DriveTrainDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 2 ? <p>Drive Train: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Drive Train"}</p>}
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
        <DropdownItem key="All Wheel" className={styles.item} selectedIcon={selectedKeys.has("All Wheel") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          All Wheel
        </DropdownItem>
        <DropdownItem key="Front Wheel" className={styles.item} selectedIcon={selectedKeys.has("Front Wheel") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Front Wheel
        </DropdownItem>
        <DropdownItem key="Rear Wheel" className={styles.item} selectedIcon={selectedKeys.has("Rear Wheel") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Rear Wheel
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
