// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The intended usage for supplemental data elements in the measure.
 */
export const MeasureDataUsageValueSet = {
    /**
     * The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    measure_data_usage_RiskAdjustmentFactor: Coding.FromStrict({
        code: "risk-adjustment-factor",
        display: "Risk Adjustment Factor",
        system: "http://terminology.hl7.org/CodeSystem/measure-data-usage"
    }),
    /**
     * The data is intended to be provided as additional information alongside the measure results.
     */
    measure_data_usage_SupplementalData: Coding.FromStrict({
        code: "supplemental-data",
        display: "Supplemental Data",
        system: "http://terminology.hl7.org/CodeSystem/measure-data-usage"
    }),
};
//# sourceMappingURL=MeasureDataUsageValueSet.js.map