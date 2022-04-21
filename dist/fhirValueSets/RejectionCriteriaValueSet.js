// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/rejection-criteria|4.0.1
import { Coding } from '../fhir.js';
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export const RejectionCriteriaValueSet = {
    /**
     * broken: specimen container broken.
     */
    BrokenSpecimenContainer: new Coding({
        display: "broken specimen container",
        code: "broken",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
    }),
    /**
     * clotted: specimen clotted.
     */
    SpecimenClotted: new Coding({
        display: "specimen clotted",
        code: "clotted",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
    }),
    /**
     * hemolized: blood specimen hemolized.
     */
    HemolizedSpecimen: new Coding({
        display: "hemolized specimen",
        code: "hemolized",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
    }),
    /**
     * insufficient: insufficient quantity of specimen.
     */
    InsufficientSpecimenVolume: new Coding({
        display: "insufficient specimen volume",
        code: "insufficient",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
    }),
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    SpecimenTemperatureInappropriate: new Coding({
        display: "specimen temperature inappropriate",
        code: "wrong-temperature",
        system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
    }),
};
/**
 * Criterion for rejection of the specimen by laboratory.
 */
export var RejectionCriteriaValueSetEnum;
(function (RejectionCriteriaValueSetEnum) {
    /**
     * broken: specimen container broken.
     */
    RejectionCriteriaValueSetEnum["BrokenSpecimenContainer"] = "broken";
    /**
     * clotted: specimen clotted.
     */
    RejectionCriteriaValueSetEnum["SpecimenClotted"] = "clotted";
    /**
     * hemolized: blood specimen hemolized.
     */
    RejectionCriteriaValueSetEnum["HemolizedSpecimen"] = "hemolized";
    /**
     * insufficient: insufficient quantity of specimen.
     */
    RejectionCriteriaValueSetEnum["InsufficientSpecimenVolume"] = "insufficient";
    /**
     * wrong-temperature: specimen temperature inappropriate.
     */
    RejectionCriteriaValueSetEnum["SpecimenTemperatureInappropriate"] = "wrong-temperature";
})(RejectionCriteriaValueSetEnum || (RejectionCriteriaValueSetEnum = {}));
//# sourceMappingURL=RejectionCriteriaValueSet.js.map