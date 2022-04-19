// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes sample Contract Actor Role codes.
 */
export const ContractActorroleValueSet = {
    /**
     * A receiver, human or animal, of health care related goods and services.
     */
    contract_actorrole_Patient: new Coding({
        code: "patient",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/contractactorrole"
    }),
    /**
     * Someone who provides health care related services to people or animals including both clinical and support services.
     */
    contract_actorrole_Practitioner: new Coding({
        code: "practitioner",
        display: "Practitioner",
        system: "http://terminology.hl7.org/CodeSystem/contractactorrole"
    }),
};
//# sourceMappingURL=ContractActorroleValueSet.js.map