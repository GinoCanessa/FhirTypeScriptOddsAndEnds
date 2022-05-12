import { Coding } from '../fhir.js';
/**
 * The status of the document reference.
 */
export declare const DocumentReferenceStatusValueSet: {
    /**
     * current: This is the current reference for this document.
     */
    readonly Current: Coding;
    /**
     * entered-in-error: This reference was created in error.
     */
    readonly EnteredInError: Coding;
    /**
     * superseded: This reference has been superseded by another reference.
     */
    readonly Superseded: Coding;
};
/**
 * The status of the document reference.
 */
export declare type DocumentReferenceStatusValueSetType = typeof DocumentReferenceStatusValueSet;
/**
 * The status of the document reference.
 */
//# sourceMappingURL=DocumentReferenceStatusValueSet.d.ts.map