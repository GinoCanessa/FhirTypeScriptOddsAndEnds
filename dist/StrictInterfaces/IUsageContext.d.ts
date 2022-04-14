import * as fhirInterfaces from '../strictinterfaces';
/**
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 */
export interface IUsageContext extends fhirInterfaces.IElement {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: fhirInterfaces.ICoding;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
//# sourceMappingURL=IUsageContext.d.ts.map