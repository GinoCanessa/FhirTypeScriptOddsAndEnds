// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-reference-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * The status of the document reference.
 */
export const DocumentReferenceStatusValueSet = {
    /**
     * current: This is the current reference for this document.
     */
    Current: new Coding({
        display: "Current",
        code: "current",
        system: "http://hl7.org/fhir/document-reference-status",
    }),
    /**
     * entered-in-error: This reference was created in error.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/document-reference-status",
    }),
    /**
     * superseded: This reference has been superseded by another reference.
     */
    Superseded: new Coding({
        display: "Superseded",
        code: "superseded",
        system: "http://hl7.org/fhir/document-reference-status",
    }),
};
/**
 * The status of the document reference.
 */
//# sourceMappingURL=DocumentReferenceStatusValueSet.js.map