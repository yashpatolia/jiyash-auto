"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BodyTypeDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 2 ? <p>Body Type: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Body Type"}</p>}
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
        <DropdownItem key="Hatchback" className={styles.item} selectedIcon={selectedKeys.has("Hatchback") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Hatchback
        </DropdownItem>
        <DropdownItem key="Pickup" className={styles.item} selectedIcon={selectedKeys.has("Pickup") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Pickup
        </DropdownItem>
        <DropdownItem key="SUV" className={styles.item} selectedIcon={selectedKeys.has("SUV") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          SUV
        </DropdownItem>
        <DropdownItem key="Sedan" className={styles.item} selectedIcon={selectedKeys.has("Sedan") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Sedan
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
