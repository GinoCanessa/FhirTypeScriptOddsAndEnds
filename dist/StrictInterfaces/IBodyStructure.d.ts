import * as fhirInterfaces from '../strictinterfaces';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export interface IBodyStructure extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "BodyStructure";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhirInterfaces.IAttachment[] | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhirInterfaces.IReference;
}
//# sourceMappingURL=IBodyStructure.d.ts.map