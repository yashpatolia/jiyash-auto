"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ModelDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 1 ? <p>Model: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Model"}</p>}
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
        <DropdownItem key="CR-V EX" className={styles.item} selectedIcon={selectedKeys.has("CR-V EX") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          CR-V EX
        </DropdownItem>
        <DropdownItem key="CR-V LX" className={styles.item} selectedIcon={selectedKeys.has("CR-V LX") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          CR-V LX
        </DropdownItem>
        <DropdownItem key="Civic" className={styles.item} selectedIcon={selectedKeys.has("Civic") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Civic
        </DropdownItem>
        <DropdownItem key="Corolla LE Plus" className={styles.item} selectedIcon={selectedKeys.has("Corolla LE Plus") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Corolla LE Plus
        </DropdownItem>
        <DropdownItem key="Crosstrek Hybrid" className={styles.item} selectedIcon={selectedKeys.has("Crosstrek Hybrid") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Crosstrek Hybrid
        </DropdownItem>
        <DropdownItem key="Elantra GLS" className={styles.item} selectedIcon={selectedKeys.has("Elentra GLS") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Eleantre GLS
        </DropdownItem>
        <DropdownItem key="Forte LX" className={styles.item} selectedIcon={selectedKeys.has("Forte LX") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Forte LX
        </DropdownItem>
        <DropdownItem key="ILX Premium" className={styles.item} selectedIcon={selectedKeys.has("ILX Premium") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          ILX Premium
        </DropdownItem>
        <DropdownItem key="Matrix" className={styles.item} selectedIcon={selectedKeys.has("Matrix") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Matrix
        </DropdownItem>
        <DropdownItem key="Ridgeline" className={styles.item} selectedIcon={selectedKeys.has("Ridgeline") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          Ridgeline
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
