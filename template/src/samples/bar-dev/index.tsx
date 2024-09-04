import "./index.css";
import Code from "./sections/code";
import ConcreteMaterial from "./sections/concrete-material";
import EmptyGrid from "./sections/empty-grid";
import SteelMaterial from "./sections/steel-material";
import LightWeightConcrete from "./sections/light-weight-concrete";
import FactorInTensionStraight from "./sections/factor-in-tension-straight";
import FactorInTensionHooks from "./sections/factors-in-tension-hooks";
import FactorInCompression from "./sections/factors-in-compression";
import CreateBtn from "./sections/create-btn";

const App = () => {
  return (
    <div className="bar-dev-container">
      <p className="bar-dev-title">Development & Splice Length Calculator</p>

      <div className="bar-dev-main">
        <Code />
        <EmptyGrid />

        <div className="bar-dev-options-l">
          <ConcreteMaterial />
          <SteelMaterial />
          <LightWeightConcrete />
        </div>

        <div className="bar-dev-options-r">
          <FactorInTensionStraight />
          <FactorInTensionHooks />
          <FactorInCompression />
        </div>
      </div>

      <div className="bar-dev-btn">
        <CreateBtn />
      </div>
    </div>
  );
};

export default App;
