import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export interface ISpecimenDefinitionTypeTestedContainerAdditive extends fhirInterfaces.IBackboneElement {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhirInterfaces.IReference | undefined;
}
/**
 * The specimen's container.
 */
export interface ISpecimenDefinitionTypeTestedContainer extends fhirInterfaces.IBackboneElement {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhirInterfaces.ISpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The type of material of the container.
     */
    material?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    _minimumVolumeString?: fhirInterfaces.IElement | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    _preparation?: fhirInterfaces.IElement | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export interface ISpecimenDefinitionTypeTestedHandling extends fhirInterfaces.IBackboneElement {
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    _instruction?: fhirInterfaces.IElement | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhirInterfaces.IRange | undefined;
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export interface ISpecimenDefinitionTypeTested extends fhirInterfaces.IBackboneElement {
    /**
     * The specimen's container.
     */
    container?: fhirInterfaces.ISpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhirInterfaces.ISpecimenDefinitionTypeTestedHandling[] | undefined;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    _isDerived?: fhirInterfaces.IElement | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference?: SpecimenDefinitionTypeTestedPreferenceEnum | undefined;
    _preference?: fhirInterfaces.IElement | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    _requirement?: fhirInterfaces.IElement | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhirInterfaces.IDuration | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the SpecimenDefinition.typeTested.preference field
 */
export declare enum SpecimenDefinitionTypeTestedPreferenceEnum {
    PREFERRED = "preferred",
    ALTERNATE = "alternate"
}
/**
 * A kind of specimen with associated set of requirements.
 */
export interface ISpecimenDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SpecimenDefinition";
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    _timeAspect?: fhirInterfaces.IElement | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhirInterfaces.ISpecimenDefinitionTypeTested[] | undefined;
}
//# sourceMappingURL=ISpecimenDefinition.d.ts.map