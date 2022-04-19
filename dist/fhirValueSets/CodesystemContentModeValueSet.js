// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 */
export const CodesystemContentModeValueSet = {
    /**
     * All the concepts defined by the code system are included in the code system resource.
     */
    codesystem_content_mode_Complete: new Coding({
        code: "complete",
        display: "Complete",
        system: "http://hl7.org/fhir/codesystem-content-mode"
    }),
    /**
     * A few representative concepts are included in the code system resource. There is no useful intent in the subset choice and there's no process to make it workable: it's not intended to be workable.
     */
    codesystem_content_mode_Example: new Coding({
        code: "example",
        display: "Example",
        system: "http://hl7.org/fhir/codesystem-content-mode"
    }),
    /**
     * A subset of the code system concepts are included in the code system resource. This is a curated subset released for a specific purpose under the governance of the code system steward, and that the intent, bounds and consequences of the fragmentation are clearly defined in the fragment or the code system documentation. Fragments are also known as partitions.
     */
    codesystem_content_mode_Fragment: new Coding({
        code: "fragment",
        display: "Fragment",
        system: "http://hl7.org/fhir/codesystem-content-mode"
    }),
    /**
     * None of the concepts defined by the code system are included in the code system resource.
     */
    codesystem_content_mode_NotPresent: new Coding({
        code: "not-present",
        display: "Not Present",
        system: "http://hl7.org/fhir/codesystem-content-mode"
    }),
    /**
     * The resource doesn't define any new concepts; it just provides additional designations and properties to another code system.
     */
    codesystem_content_mode_Supplement: new Coding({
        code: "supplement",
        display: "Supplement",
        system: "http://hl7.org/fhir/codesystem-content-mode"
    }),
};
//# sourceMappingURL=CodesystemContentModeValueSet.js.map