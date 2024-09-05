import CarElement from "./CarElement";
import styles from "./CarInventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./menus/Dropdown";

const CarInventory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className="items-center flex pb-[10px]">
          <FontAwesomeIcon icon="fas fa-magnifying-glass" />
          <p className="pl-[10px]">Search Our Inventory</p>
        </div>
        <Dropdown label="Year" id="year" />
      </div>
      <div className={styles.inventory}>
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
        <CarElement />
      </div>
    </div>
  );
};

export default CarInventory;
