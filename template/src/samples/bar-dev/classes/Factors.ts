import React from "react";

class Factors {
  private titleNode: React.ReactNode;
  private factors?: Record<string, { factor: number; desc: string }>;

  constructor(
    titleNode: React.ReactNode,
    factors?: Record<string, { factor: number; desc: string }>
  ) {
    this.titleNode = titleNode;
    this.factors = factors;
  }

  getTitleNode() {
    return this.titleNode;
  }

  getFactors() {
    if (!this.factors) return [];
    return Object.keys(this.factors);
  }

  getDesc(key: string) {
    if (!this.factors) return "there are no factors!";
    if (!this.factors[key]) {
      return "No description found...";
    }

    return this.factors[key].desc;
  }
}

export default Factors;
