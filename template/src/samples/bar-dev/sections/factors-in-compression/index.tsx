import React from "react";
import More from "../../components/description";
import Factors from "../../classes/Factors";

const FactorInCompression = () => {
  //psi-c
  const factorsPsiR: Factors = new Factors(
    (
      <p className="text-pretty with-dark-text-gray-700">
        Ψ<sub>r</sub>
      </p>
    )
  );

  return (
    <div>
      <p className="text-pretty text-lg with-dark-text-gray-700">
        Factors in tension (hooks)
      </p>
      <div className="grid grid-cols-1 gap-4 mt-4">
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
              <p className="text-pretty with-dark-text-gray-700">
                (Automatically considered)
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-14">
            <More
              title={factorsPsiR.getTitleNode()}
              desc="need to add description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorInCompression;
