import CarElement from "./CarElement";
import styles from "./CarInventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YearDropdown from "./dropdowns/YearDropdown";
import MakeDropdown from "./dropdowns/MakeDropdown";
import ModelDropdown from "./dropdowns/ModelDropdown";
import BodyTypeDropdown from "./dropdowns/BodyTypeDropdown";
import TransmissionDropdown from "./dropdowns/TransmissionDropdown";
import DriveTrainDropdown from "./dropdowns/DriveTrainDropdown";
import ExteriorColorDropdown from "./dropdowns/ExtColorDropdown";
import InteriorColorDropdown from "./dropdowns/IntColorDropdown";

const CarInventory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className="items-center flex pb-[10px]">
          <FontAwesomeIcon icon="fas fa-magnifying-glass" />
          <p className="pl-[10px]">Search Our Inventory</p>
        </div>

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

        <YearDropdown />
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
