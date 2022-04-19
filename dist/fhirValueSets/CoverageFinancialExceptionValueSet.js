// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes Example Coverage Financial Exception Codes.
 */
export const CoverageFinancialExceptionValueSet = {
    /**
     * Children in the foster care have all copays and deductibles waived.
     */
    coverage_financial_exception_FosterChild: Coding.FromStrict({
        code: "foster",
        display: "Foster child",
        system: "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception"
    }),
    /**
     * Retired persons have all copays and deductibles reduced.
     */
    coverage_financial_exception_Retired: Coding.FromStrict({
        code: "retired",
        display: "Retired",
        system: "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception"
    }),
};
//# sourceMappingURL=CoverageFinancialExceptionValueSet.js.map