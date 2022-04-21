import { Coding } from '../fhir.js';
/**
 * How an extension context is interpreted.
 */
export declare const ExtensionContextTypeValueSet: {
    /**
     * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
     */
    readonly ElementID: Coding;
    /**
     * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
     */
    readonly ExtensionURL: Coding;
    /**
     * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
     */
    readonly FHIRPath: Coding;
};
/**
 * How an extension context is interpreted.
 */
export declare type ExtensionContextTypeValueSetType = typeof ExtensionContextTypeValueSet;
/**
 * How an extension context is interpreted.
 */
export declare enum ExtensionContextTypeValueSetEnum {
    /**
     * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
     */
    ElementID = "element",
    /**
     * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
     */
    ExtensionURL = "extension",
    /**
     * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
     */
    FHIRPath = "fhirpath"
}
//# sourceMappingURL=ExtensionContextTypeValueSet.d.ts.map