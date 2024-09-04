import React from "react";
import DropDown from "../../components/dropdown";
import More from "../../components/description";
import Factors from "../../classes/Factors";

const FactorInTensionHooks = () => {
  //psi-e
  const [currentPsiE, setCurrentPsiE] = React.useState("1.2");
  const factorsPsiE: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>e</sub>
      </p>
    ),
    {
      "1.2": {
        factor: 1.2,
        desc: "Epoxy-coated or zinc and epoxy  dual-coated reinforcement",
      },
      "1.0": {
        factor: 1.0,
        desc: "Uncoated or zinc-coated  (galvanized) reinforcement",
      },
    }
  );

  //psi-r
  const [currentPsiR, setCurrentPsiR] = React.useState("1.0");
  const factorsPsiR: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>r</sub>
      </p>
    ),
    {
      "1.0": {
        factor: 1.0,
        desc: "For No. 36 and smaller bars with  Ath ≥ 0.4Ahs or s ≥ 6db",
      },
      "1.6": {
        factor: 1.6,
        desc: "Other",
      },
    }
  );

  //psi-o
  const [currentPsiO, setCurrentPsiO] = React.useState("1.0");
  const factorsPsiO: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>o</sub>
      </p>
    ),
    {
      "1.0": {
        factor: 1.0,
        desc: "For No. 36 and smaller diameter  hooked bars: (1) Terminating inside column  core with side cover normal to  plane of hook ≥ 65 mm, or (2) With side cover normal to  plane of hook ≥ 6db",
      },
      "1.25": {
        factor: 1.25,
        desc: "Other",
      },
    }
  );

  //psi-c
  const factorsPsiC: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>c</sub>
      </p>
    )
  );

  return (
    <div>
      <p className="text-pretty text-lg with-dark-text-gray-700">
        Factors in tension (hooks)
      </p>
      <div className="grid grid-cols-1 gap-4 mt-4">
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

        {/* Ψr */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiR.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                Confining reinforcement
              </p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <DropDown
                data={factorsPsiR.getFactors()}
                width="200px"
                onChange={(value: string) => setCurrentPsiR(value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={
                <div className="flex items-center gap-2">
                  {factorsPsiR.getTitleNode()}
                  <p className="text-pretty with-dark-text-gray-700">
                    {currentPsiR}
                  </p>
                </div>
              }
              desc={factorsPsiR.getDesc(currentPsiR)}
              tooltipWidth={400}
            />
          </div>
        </div>

        {/* Ψo */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiO.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">Location</p>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <DropDown
                data={factorsPsiO.getFactors()}
                width="200px"
                onChange={(value: string) => setCurrentPsiO(value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={
                <div className="flex items-center gap-2">
                  {factorsPsiO.getTitleNode()}
                  <p className="text-pretty with-dark-text-gray-700">
                    {currentPsiO}
                  </p>
                </div>
              }
              desc={factorsPsiO.getDesc(currentPsiO)}
              tooltipWidth={400}
            />
          </div>
        </div>

        {/* Ψc */}
        <div className="flex with-dark-bg-white rounded-lg p-2 gap-4">
          <div className="flex items-center justify-center w-14">
            {factorsPsiC.getTitleNode()}
          </div>
          <div className="flex flex-grow items-center justify-center">
            <div className="flex items-center justify-left w-1/2">
              <p className="text-pretty with-dark-text-gray-700">
                Concrete Strength
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
              title={factorsPsiC.getTitleNode()}
              desc="need to add description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorInTensionHooks;
