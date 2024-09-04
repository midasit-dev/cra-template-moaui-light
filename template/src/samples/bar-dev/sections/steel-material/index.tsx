import React from "react";
import ToggleLabel from "../../components/toggle-label";

const onChangeToggle = (e: any) => console.log(e.target.id, e.target.checked);

const SteelMaterial = () => {
  return (
    <div>
      <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
        Steel Material
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ToggleLabel
          label="Grade 280"
          prefix="steel-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="Grade 550"
          prefix="steel-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="Grade 420"
          prefix="steel-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="Grade 690"
          prefix="steel-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="Grade 520"
          prefix="steel-material"
          onChange={onChangeToggle}
        />
      </div>
    </div>
  );
};

export default SteelMaterial;
