import React from "react";
import DropDown from "../../components/dropdown";
import More from "../../components/description";
import Factors from "../../classes/Factors";

const FactorInTensionStraight = () => {
  //psi-g
  const factorsPsiG: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>g</sub>
      </p>
    )
  );

  //psi-e
  const [currentPsiE, setCurrentPsiE] = React.useState("1.5");
  const factorsPsiE: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>e</sub>
      </p>
    ),
    {
      "1.5": {
        factor: 1.5,
        desc: "Epoxy-coated or zinc and epoxy dual-coated reinforcement with clear cover less than 3db or clear spacing less than 6db",
      },
      "1.2": {
        factor: 1.2,
        desc: "Epoxy-coated or zinc and epoxy dual-coated reinforcement for all other conditions",
      },
      "1.0": {
        factor: 1.0,
        desc: "Uncoated or zinc-coated (galvanized) reinforcement",
      },
    }
  );

  //psi-s
  const factorsPsiS: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>s</sub>
      </p>
    )
  );

  //psi-t
  const factorsPsiT: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>t</sub>
      </p>
    )
  );

  return (
    <div>
      <p className="text-pretty text-lg with-dark-text-gray-700">
        Factors in tension (straight)
      </p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Ψg */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiG.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                Reinforcement grade
              </p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              {" "}
              <p className="text-pretty with-dark-text-gray-700">
                (Automatically considered)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={factorsPsiG.getTitleNode()}
              desc={
                <div className="mt-2">
                  <img src="./assets/psi-t-test.png" alt="psi-t" />
                </div>
              }
              tooltipWidth={400}
            />
          </div>
        </div>

        {/* Ψe */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiE.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">Epoxy</p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <DropDown
                data={factorsPsiE.getFactors()}
                width="200px"
                onChange={(value: string) => setCurrentPsiE(value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={
                <div className="flex items-center gap-2">
                  {factorsPsiE.getTitleNode()}
                  <p className="text-pretty with-dark-text-gray-700">
                    {currentPsiE}
                  </p>
                </div>
              }
              desc={factorsPsiE.getDesc(currentPsiE)}
              tooltipWidth={400}
            />
          </div>
        </div>

        {/* Ψs */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiS.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">Size</p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                (Automatically considered)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={factorsPsiE.getTitleNode()}
              desc="need to add description"
            />
          </div>
        </div>

        {/* Ψt */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiT.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                Casting position
              </p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                (Automatically considered)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={factorsPsiT.getTitleNode()}
              desc="need to add description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorInTensionStraight;
