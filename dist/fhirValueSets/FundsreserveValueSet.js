// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes sample funds reservation type codes.
 */
export const FundsreserveValueSet = {
    /**
     * The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    fundsreserve_None: Coding.FromStrict({
        code: "none",
        display: "None",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    }),
    /**
     * The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    fundsreserve_Patient: Coding.FromStrict({
        code: "patient",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    }),
    /**
     * The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    fundsreserve_Provider: Coding.FromStrict({
        code: "provider",
        display: "Provider",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    }),
};
//# sourceMappingURL=FundsreserveValueSet.js.map