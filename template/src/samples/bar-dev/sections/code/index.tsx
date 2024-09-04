import DropDown from "../../components/dropdown";

const Code = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
          Code
        </p>
        <DropDown data={["ACI318M-19", "KDS-999"]} width={200} />
        <DropDown data={["ACI318M-19", "KDS-999"]} width={200} />
      </div>
    </div>
  );
};

export default Code;
