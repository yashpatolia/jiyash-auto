import CarElement from "./CarElement";
import styles from "./CarInventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarInventory = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.filter} items-center`}>
        <FontAwesomeIcon icon="fas fa-magnifying-glass" />
        <p className="pl-[10px]">Search Our Inventory</p>
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
