import "./index.css";
import DropDown from "./components/dropdown";
import ToggleLabel from "./components/toggle-label";

const onChangeToggle = (e: any) => console.log(e.target.id, e.target.checked);

const App = () => {
  return (
    <div className="h-screen items-center justify-center">
      <div className="grid grid-cols-1 gap-0 p-4">
        <p className=" text-3xl font-medium text-gray-900 dark:text-white text-center">
          Development & Splice Length Calculator
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-8">
          <div className="rounded-lg">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
                Code
              </p>
              <DropDown data={["ACI318M-19", "KDS-999"]} width={200} />
            </div>
          </div>
          <div className="rounded-lg"></div>
          <div className="grid grid-cols-1 gap-4 w-full rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg">
                <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
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
              <div className="rounded-lg">
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
              <div className="rounded-lg">
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
            </div>
          </div>
          <div className="w-full rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg">
                <p className="text-pretty text-lg text-gray-700 dark:text-gray-200">
                  Factors in tension (straight)
                </p>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <ToggleLabel
                    label="psi"
                    labelSubstitute={
                      <p className="text-pretty text-sm text-gray-700">
                        Ψ<sub>t</sub>
                      </p>
                    }
                    prefix="factors-in-tension-straight"
                    onChange={onChangeToggle}
                    defaultChecked={false}
                  />
                </div>
              </div>
              <div className="h-12 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
