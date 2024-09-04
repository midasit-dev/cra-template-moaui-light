import ToggleLabel from "../../components/toggle-label";

const onChangeToggle = (e: any) => console.log(e.target.id, e.target.checked);

const LightWeightConcrete = () => {
  return (
    <div>
      <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
        Lightweight Concrete
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ToggleLabel
          label="λ"
          prefix="lightweight-concrete"
          onChange={onChangeToggle}
          defaultChecked={false}
        />
      </div>
    </div>
  );
};

export default LightWeightConcrete;
