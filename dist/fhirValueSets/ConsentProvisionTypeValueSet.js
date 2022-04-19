// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export const ConsentProvisionTypeValueSet = {
    /**
     * Consent is denied for actions meeting these rules.
     */
    consent_provision_type_OptOut: Coding.FromStrict({
        code: "deny",
        display: "Opt Out",
        system: "http://hl7.org/fhir/consent-provision-type"
    }),
    /**
     * Consent is provided for actions meeting these rules.
     */
    consent_provision_type_OptIn: Coding.FromStrict({
        code: "permit",
        display: "Opt In",
        system: "http://hl7.org/fhir/consent-provision-type"
    }),
};
//# sourceMappingURL=ConsentProvisionTypeValueSet.js.map