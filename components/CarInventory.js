import CarElement from "./CarElement";
import styles from "./CarInventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YearDropdown from "./dropdowns/YearDropdown";

const CarInventory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className="items-center flex pb-[10px]">
          <FontAwesomeIcon icon="fas fa-magnifying-glass" />
          <p className="pl-[10px]">Search Our Inventory</p>
        </div>
<<<<<<< HEAD:frontend/components/CarInventory.js
        <div className="flex flex-col gap-[15px]">
          <YearDropdown />
          <MakeDropdown />
          <ModelDropdown />
          <BodyTypeDropdown />
          <TransmissionDropdown />
          <DriveTrainDropdown />
          <ExteriorColorDropdown />
          <InteriorColorDropdown />
        </div>
=======
        <YearDropdown />
>>>>>>> parent of d114bdb6 (implement all filters):components/CarInventory.js
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
