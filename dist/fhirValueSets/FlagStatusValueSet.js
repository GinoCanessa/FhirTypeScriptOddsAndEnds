// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export const FlagStatusValueSet = {
    /**
     * A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    flag_status_Active: Coding.FromStrict({
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/flag-status"
    }),
    /**
     * The flag was added in error and should no longer be displayed.
     */
    flag_status_EnteredInError: Coding.FromStrict({
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/flag-status"
    }),
    /**
     * The flag no longer needs to be displayed.
     */
    flag_status_Inactive: Coding.FromStrict({
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/flag-status"
    }),
};
//# sourceMappingURL=FlagStatusValueSet.js.map