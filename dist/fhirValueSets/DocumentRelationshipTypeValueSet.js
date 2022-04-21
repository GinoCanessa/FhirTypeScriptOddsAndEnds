// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-relationship-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of relationship between documents.
 */
export const DocumentRelationshipTypeValueSet = {
    /**
     * appends: This document adds additional information to the target document.
     */
    Appends: new Coding({
        display: "Appends",
        code: "appends",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * replaces: This document logically replaces or supersedes the target document.
     */
    Replaces: new Coding({
        display: "Replaces",
        code: "replaces",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * signs: This document is a signature of the target document.
     */
    Signs: new Coding({
        display: "Signs",
        code: "signs",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
    /**
     * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
     */
    Transforms: new Coding({
        display: "Transforms",
        code: "transforms",
        system: "http://hl7.org/fhir/document-relationship-type",
    }),
};
/**
 * The type of relationship between documents.
 */
export var DocumentRelationshipTypeValueSetEnum;
(function (DocumentRelationshipTypeValueSetEnum) {
    /**
     * appends: This document adds additional information to the target document.
     */
    DocumentRelationshipTypeValueSetEnum["Appends"] = "appends";
    /**
     * replaces: This document logically replaces or supersedes the target document.
     */
    DocumentRelationshipTypeValueSetEnum["Replaces"] = "replaces";
    /**
     * signs: This document is a signature of the target document.
     */
    DocumentRelationshipTypeValueSetEnum["Signs"] = "signs";
    /**
     * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
     */
    DocumentRelationshipTypeValueSetEnum["Transforms"] = "transforms";
})(DocumentRelationshipTypeValueSetEnum || (DocumentRelationshipTypeValueSetEnum = {}));
//# sourceMappingURL=DocumentRelationshipTypeValueSet.js.map