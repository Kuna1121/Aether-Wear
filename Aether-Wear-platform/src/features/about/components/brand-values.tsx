import type { BrandValue } from "../models";
import "../pages/about.css";

interface BrandValuesProps {
  values: BrandValue[];
}

export default function BrandValues({ values }: BrandValuesProps) {
  return (
    <div className="brand-values-section">
      <div className="section-header">
        <h2>Our Core Values</h2>
        <div className="header-underline"></div>
      </div>
      <div className="values-grid">
        {values.map((value) => (
          <div key={value.id} className="value-card">
            <div
              className="value-icon"
              dangerouslySetInnerHTML={{ __html: value.icon }}
            />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
