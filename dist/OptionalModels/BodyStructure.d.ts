import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare class BodyStructure extends fhirModels.DomainResource implements fhirInterfaces.IBodyStructure {
    /**
     * Resource Type Name
     */
    readonly resourceType = "BodyStructure";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhirModels.Attachment[] | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhirModels.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhirModels.CodeableConcept | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Default constructor for BodyStructure from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBodyStructure>);
    /**
     * Factory function to create a BodyStructure from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBodyStructure): BodyStructure;
    /**
     * Check if the current BodyStructure contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=BodyStructure.d.ts.map