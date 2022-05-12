// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/narrative-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * The status of a resource narrative.
 */
export const NarrativeStatusValueSet = {
    /**
     * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    Additional: new Coding({
        display: "Additional",
        code: "additional",
        system: "http://hl7.org/fhir/narrative-status",
    }),
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    Empty: new Coding({
        display: "Empty",
        code: "empty",
        system: "http://hl7.org/fhir/narrative-status",
    }),
    /**
     * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    Extensions: new Coding({
        display: "Extensions",
        code: "extensions",
        system: "http://hl7.org/fhir/narrative-status",
    }),
    /**
     * generated: The contents of the narrative are entirely generated from the core elements in the content.
     */
    Generated: new Coding({
        display: "Generated",
        code: "generated",
        system: "http://hl7.org/fhir/narrative-status",
    }),
};
/**
 * The status of a resource narrative.
 */
//# sourceMappingURL=NarrativeStatusValueSet.js.map