"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function MakeDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 2 ? <p>Make: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Make"}</p>}
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
        <DropdownItem key="Acura" className={styles.item} selectedIcon={selectedKeys.has("Acura") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Acura
        </DropdownItem>
        <DropdownItem key="BMW" className={styles.item} selectedIcon={selectedKeys.has("BMW") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          BMW
        </DropdownItem>
        <DropdownItem key="Honda" className={styles.item} selectedIcon={selectedKeys.has("Honda") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Honda
        </DropdownItem>
        <DropdownItem key="Hyundai" className={styles.item} selectedIcon={selectedKeys.has("Hyundai") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Hyundai
        </DropdownItem>
        <DropdownItem key="Kia" className={styles.item} selectedIcon={selectedKeys.has("Kia") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Kia
        </DropdownItem>
        <DropdownItem key="Subaru" className={styles.item} selectedIcon={selectedKeys.has("Subaru") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Subaru
        </DropdownItem>
        <DropdownItem key="Toyota" className={styles.item} selectedIcon={selectedKeys.has("Toyota") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Toyota
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
