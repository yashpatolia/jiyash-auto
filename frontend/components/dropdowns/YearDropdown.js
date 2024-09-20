"use client";

import React from "react";
import styles from "./Dropdown.module.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function YearDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(", "), [selectedKeys]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className={`${styles.btn} capitalize`} disableRipple>
          {selectedValue && selectedKeys.size > 4 ? <p>Year: {selectedKeys.size} Selected</p> : <p>{selectedValue || "Year"}</p>}
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
        <DropdownItem key="2009" className={styles.item} selectedIcon={selectedKeys.has("2009") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2009
        </DropdownItem>
        <DropdownItem key="2010" className={styles.item} selectedIcon={selectedKeys.has("2010") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2010
        </DropdownItem>
        <DropdownItem key="2011" className={styles.item} selectedIcon={selectedKeys.has("2011") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2011
        </DropdownItem>
        <DropdownItem key="2012" className={styles.item} selectedIcon={selectedKeys.has("2012") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2012
        </DropdownItem>
        <DropdownItem key="2013" className={styles.item} selectedIcon={selectedKeys.has("2013") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2013
        </DropdownItem>
        <DropdownItem key="2014" className={styles.item} selectedIcon={selectedKeys.has("2014") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2014
        </DropdownItem>
        <DropdownItem key="2015" className={styles.item} selectedIcon={selectedKeys.has("2015") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2015
        </DropdownItem>
        <DropdownItem key="2016" className={styles.item} selectedIcon={selectedKeys.has("2016") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2016
        </DropdownItem>
        <DropdownItem key="2017" className={styles.item} selectedIcon={selectedKeys.has("2017") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2017
        </DropdownItem>
        <DropdownItem key="2018" className={styles.item} selectedIcon={selectedKeys.has("2018") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2018
        </DropdownItem>
        <DropdownItem key="2019" className={styles.item} selectedIcon={selectedKeys.has("2019") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2019
        </DropdownItem>
        <DropdownItem key="2020" className={styles.item} selectedIcon={selectedKeys.has("2020") ? <FontAwesomeIcon icon={faCheck} /> : null}>
          2020
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
