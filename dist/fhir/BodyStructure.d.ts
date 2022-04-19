import * as fhir from '../fhir';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare type IBodyStructure = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.IAttachment[] | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.ICodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.ICodeableConcept | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.IReference | null;
};
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare class BodyStructure extends fhir.DomainResource implements fhir.IBodyStructure {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.Attachment[] | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhir.CodeableConcept[] | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.CodeableConcept | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
    /**
     * Default constructor for BodyStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IBodyStructure>);
    /**
     * Check if the current BodyStructure contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a BodyStructure from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IBodyStructure): BodyStructure;
}
//# sourceMappingURL=BodyStructure.d.ts.map