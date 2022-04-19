// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Indicates the state of the consent.
 */
export const ConsentStateCodesValueSet = {
    /**
     * The consent is to be followed and enforced.
     */
    consent_state_codes_Active: Coding.FromStrict({
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
    /**
     * The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    consent_state_codes_Pending: Coding.FromStrict({
        code: "draft",
        display: "Pending",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
    /**
     * The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    consent_state_codes_EnteredInError: Coding.FromStrict({
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
    /**
     * The consent is terminated or replaced.
     */
    consent_state_codes_Inactive: Coding.FromStrict({
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
    /**
     * The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    consent_state_codes_Proposed: Coding.FromStrict({
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
    /**
     * The consent has been rejected by one or more of the parties.
     */
    consent_state_codes_Rejected: Coding.FromStrict({
        code: "rejected",
        display: "Rejected",
        system: "http://hl7.org/fhir/consent-state-codes"
    }),
};
//# sourceMappingURL=ConsentStateCodesValueSet.js.map