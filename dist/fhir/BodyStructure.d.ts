import * as fhir from '../fhir.js';
import { BodystructureCodeValueSetType } from '../fhirValueSets/BodystructureCodeValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { BodystructureRelativeLocationValueSetType } from '../fhirValueSets/BodystructureRelativeLocationValueSet.js';
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare type IBodyStructure = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.ICodeableConcept | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.ICodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.IAttachment[] | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.IReference | null;
};
/**
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 */
export declare class BodyStructure extends fhir.DomainResource implements IBodyStructure {
    /**
     * Resource Type Name
     */
    resourceType: "BodyStructure";
    /**
     * Identifier for this instance of the anatomical structure.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * The minimum cardinality of 0 supports the use case of specifying a location without defining a morphology.
     */
    morphology?: fhir.CodeableConcept | undefined;
    /**
     * The anatomical location or region of the specimen, lesion, or body structure.
     */
    location?: fhir.CodeableConcept | undefined;
    /**
     * Qualifier to refine the anatomical location.  These include qualifiers for laterality, relative location, directionality, number, and plane.
     */
    locationQualifier?: fhir.CodeableConcept[] | undefined;
    /**
     * This description could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: BodyStructure.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Image or images used to identify a location.
     */
    image?: fhir.Attachment[] | undefined;
    /**
     * The person to which the body site belongs.
     */
    patient: fhir.Reference | null;
    /**
     * Default constructor for BodyStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IBodyStructure>);
    /**
     * Example-bound Value Set for morphology
     */
    morphologyExampleValueSet(): BodystructureCodeValueSetType;
    /**
     * Example-bound Value Set for location
     */
    locationExampleValueSet(): BodySiteValueSetType;
    /**
     * Example-bound Value Set for locationQualifier
     */
    locationQualifierExampleValueSet(): BodystructureRelativeLocationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=BodyStructure.d.ts.map