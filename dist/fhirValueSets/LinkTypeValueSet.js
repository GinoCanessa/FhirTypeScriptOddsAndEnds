// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/link-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkTypeValueSet = {
    /**
     * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
     */
    Refer: new Coding({
        display: "Refer",
        code: "refer",
        system: "http://hl7.org/fhir/link-type",
    }),
    /**
     * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
     */
    ReplacedBy: new Coding({
        display: "Replaced-by",
        code: "replaced-by",
        system: "http://hl7.org/fhir/link-type",
    }),
    /**
     * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
     */
    Replaces: new Coding({
        display: "Replaces",
        code: "replaces",
        system: "http://hl7.org/fhir/link-type",
    }),
    /**
     * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
     */
    SeeAlso: new Coding({
        display: "See also",
        code: "seealso",
        system: "http://hl7.org/fhir/link-type",
    }),
};
/**
 * The type of link between this patient resource and another patient resource.
 */
//# sourceMappingURL=LinkTypeValueSet.js.map