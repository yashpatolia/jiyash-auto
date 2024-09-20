"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TransmissionDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 2 ? <p>Transmission: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Transmission"}</p>}
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="multiple select"
        variant="ghost"
        closeOnSelect={false}
        disallowEmptySelection={false}
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className={styles.menu}
      >
        <DropdownItem key="Automatic" className={styles.item} selectedIcon={selectedKeys.has("Automatic") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Automatic
        </DropdownItem>
        <DropdownItem key="Manual" className={styles.item} selectedIcon={selectedKeys.has("Manual") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Manual
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
