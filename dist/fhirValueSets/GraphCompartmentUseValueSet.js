// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/graph-compartment-use|4.0.1
import { Coding } from '../fhir.js';
/**
 * Defines how a compartment rule is used.
 */
export const GraphCompartmentUseValueSet = {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    Condition: new Coding({
        display: "Condition",
        code: "condition",
        system: "http://hl7.org/fhir/graph-compartment-use",
    }),
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    Requirement: new Coding({
        display: "Requirement",
        code: "requirement",
        system: "http://hl7.org/fhir/graph-compartment-use",
    }),
};
/**
 * Defines how a compartment rule is used.
 */
export var GraphCompartmentUseValueSetEnum;
(function (GraphCompartmentUseValueSetEnum) {
    /**
     * condition: This compartment rule is a condition for whether the rule applies.
     */
    GraphCompartmentUseValueSetEnum["Condition"] = "condition";
    /**
     * requirement: This compartment rule is enforced on any relationships that meet the conditions.
     */
    GraphCompartmentUseValueSetEnum["Requirement"] = "requirement";
})(GraphCompartmentUseValueSetEnum || (GraphCompartmentUseValueSetEnum = {}));
//# sourceMappingURL=GraphCompartmentUseValueSet.js.map