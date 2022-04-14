"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReferenceStatus = void 0;
/**
 * The status of the document reference.
 */
exports.DocumentReferenceStatus = {
    /**
     * This is the current reference for this document.
     */
    document_reference_status_Current: {
        code: "current",
        display: "Current",
        system: "http://hl7.org/fhir/document-reference-status"
    },
    /**
     * This reference was created in error.
     */
    document_reference_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/document-reference-status"
    },
    /**
     * This reference has been superseded by another reference.
     */
    document_reference_status_Superseded: {
        code: "superseded",
        display: "Superseded",
        system: "http://hl7.org/fhir/document-reference-status"
    },
};
//# sourceMappingURL=DocumentReferenceStatus.js.map