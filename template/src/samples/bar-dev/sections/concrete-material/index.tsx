import ToggleLabel from "../../components/toggle-label";

const onChangeToggle = (e: any) => console.log(e.target.id, e.target.checked);

const ConcreteMaterial = () => {
  return (
    <div>
      <p className="text-pretty text-lg with-dark-text-gray-700">
        Concrete Material
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ToggleLabel
          label="C18"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C42"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C21"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C49"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C25"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C56"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C28"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C63"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C32"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C69"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
        <ToggleLabel
          label="C35"
          prefix="concrete-material"
          onChange={onChangeToggle}
        />
      </div>
    </div>
  );
};

export default ConcreteMaterial;
