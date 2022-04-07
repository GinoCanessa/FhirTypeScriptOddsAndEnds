import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export declare class SpecimenDefinitionTypeTestedContainerAdditive extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenDefinitionTypeTestedContainerAdditive {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainerAdditive from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISpecimenDefinitionTypeTestedContainerAdditive>);
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedContainerAdditive from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISpecimenDefinitionTypeTestedContainerAdditive): SpecimenDefinitionTypeTestedContainerAdditive;
    /**
     * Check if the current SpecimenDefinitionTypeTestedContainerAdditive contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The specimen's container.
 */
export declare class SpecimenDefinitionTypeTestedContainer extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenDefinitionTypeTestedContainer {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhirModels.SpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhirModels.CodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhirModels.Quantity | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The type of material of the container.
     */
    material?: fhirModels.CodeableConcept | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhirModels.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    _minimumVolumeString?: fhirModels.Element | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    _preparation?: fhirModels.Element | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISpecimenDefinitionTypeTestedContainer>);
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedContainer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISpecimenDefinitionTypeTestedContainer): SpecimenDefinitionTypeTestedContainer;
    /**
     * Check if the current SpecimenDefinitionTypeTestedContainer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare class SpecimenDefinitionTypeTestedHandling extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenDefinitionTypeTestedHandling {
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    _instruction?: fhirModels.Element | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhirModels.Duration | undefined;
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhirModels.CodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhirModels.Range | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedHandling from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISpecimenDefinitionTypeTestedHandling>);
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedHandling from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISpecimenDefinitionTypeTestedHandling): SpecimenDefinitionTypeTestedHandling;
    /**
     * Check if the current SpecimenDefinitionTypeTestedHandling contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare class SpecimenDefinitionTypeTested extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenDefinitionTypeTested {
    /**
     * The specimen's container.
     */
    container?: fhirModels.SpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhirModels.SpecimenDefinitionTypeTestedHandling[] | undefined;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    _isDerived?: fhirModels.Element | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference?: SpecimenDefinitionTypeTestedPreferenceEnum | undefined;
    _preference?: fhirModels.Element | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    _requirement?: fhirModels.Element | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhirModels.Duration | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTested from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISpecimenDefinitionTypeTested>);
    /**
     * Factory function to create a SpecimenDefinitionTypeTested from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISpecimenDefinitionTypeTested): SpecimenDefinitionTypeTested;
    /**
     * Check if the current SpecimenDefinitionTypeTested contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class SpecimenDefinition extends fhirModels.DomainResource implements fhirInterfaces.ISpecimenDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SpecimenDefinition";
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    _timeAspect?: fhirModels.Element | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhirModels.CodeableConcept | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhirModels.SpecimenDefinitionTypeTested[] | undefined;
    /**
     * Default constructor for SpecimenDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISpecimenDefinition>);
    /**
     * Factory function to create a SpecimenDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISpecimenDefinition): SpecimenDefinition;
    /**
     * Check if the current SpecimenDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map