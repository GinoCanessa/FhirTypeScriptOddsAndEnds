// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/coverage-financial-exception|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes Example Coverage Financial Exception Codes.
 */
export const CoverageFinancialExceptionValueSet = {
    /**
     * foster: Children in the foster care have all copays and deductibles waived.
     */
    FosterChild: new Coding({
        display: "Foster child",
        code: "foster",
        system: "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception",
    }),
    /**
     * retired: Retired persons have all copays and deductibles reduced.
     */
    Retired: new Coding({
        display: "Retired",
        code: "retired",
        system: "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception",
    }),
};
/**
 * This value set includes Example Coverage Financial Exception Codes.
 */
//# sourceMappingURL=CoverageFinancialExceptionValueSet.js.map