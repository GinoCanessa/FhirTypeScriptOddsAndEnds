import * as fhir from '../fhir';
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export declare type ISpecimenDefinitionTypeTestedContainerAdditive = fhir.IBackboneElement & {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.IReference | undefined;
};
/**
 * The specimen's container.
 */
export declare type ISpecimenDefinitionTypeTestedContainer = fhir.IBackboneElement & {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.ISpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.ICodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.IQuantity | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The type of material of the container.
     */
    material?: fhir.ICodeableConcept | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.IQuantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    _minimumVolumeString?: fhir.IFhirElement | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    _preparation?: fhir.IFhirElement | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare type ISpecimenDefinitionTypeTestedHandling = fhir.IBackboneElement & {
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    _instruction?: fhir.IFhirElement | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.IDuration | undefined;
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.ICodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.IRange | undefined;
};
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare type ISpecimenDefinitionTypeTested = fhir.IBackboneElement & {
    /**
     * The specimen's container.
     */
    container?: fhir.ISpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.ISpecimenDefinitionTypeTestedHandling[] | undefined;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    _isDerived?: fhir.IFhirElement | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenDefinitionTypeTestedPreferenceEnum | null;
    _preference?: fhir.IFhirElement | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.ICodeableConcept[] | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    _requirement?: fhir.IFhirElement | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.IDuration | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A kind of specimen with associated set of requirements.
 */
export declare type ISpecimenDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition";
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.ICodeableConcept[] | undefined;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.ICodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    _timeAspect?: fhir.IFhirElement | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.ICodeableConcept | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.ISpecimenDefinitionTypeTested[] | undefined;
};
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export declare class SpecimenDefinitionTypeTestedContainerAdditive extends fhir.BackboneElement implements fhir.ISpecimenDefinitionTypeTestedContainerAdditive {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainerAdditive - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenDefinitionTypeTestedContainerAdditive>);
    /**
     * Check if the current SpecimenDefinitionTypeTestedContainerAdditive contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedContainerAdditive from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenDefinitionTypeTestedContainerAdditive): SpecimenDefinitionTypeTestedContainerAdditive;
}
/**
 * The specimen's container.
 */
export declare class SpecimenDefinitionTypeTestedContainer extends fhir.BackboneElement implements fhir.ISpecimenDefinitionTypeTestedContainer {
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.SpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.CodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The type of material of the container.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    _minimumVolumeString?: fhir.FhirElement | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    _preparation?: fhir.FhirElement | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenDefinitionTypeTestedContainer>);
    /**
     * Check if the current SpecimenDefinitionTypeTestedContainer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedContainer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenDefinitionTypeTestedContainer): SpecimenDefinitionTypeTestedContainer;
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare class SpecimenDefinitionTypeTestedHandling extends fhir.BackboneElement implements fhir.ISpecimenDefinitionTypeTestedHandling {
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    _instruction?: fhir.FhirElement | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.Duration | undefined;
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.CodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.Range | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedHandling - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenDefinitionTypeTestedHandling>);
    /**
     * Check if the current SpecimenDefinitionTypeTestedHandling contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenDefinitionTypeTestedHandling from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenDefinitionTypeTestedHandling): SpecimenDefinitionTypeTestedHandling;
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare class SpecimenDefinitionTypeTested extends fhir.BackboneElement implements fhir.ISpecimenDefinitionTypeTested {
    /**
     * The specimen's container.
     */
    container?: fhir.SpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.SpecimenDefinitionTypeTestedHandling[] | undefined;
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    _isDerived?: fhir.FhirElement | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenDefinitionTypeTestedPreferenceEnum | null;
    _preference?: fhir.FhirElement | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.CodeableConcept[] | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    _requirement?: fhir.FhirElement | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.Duration | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTested - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenDefinitionTypeTested>);
    /**
     * Check if the current SpecimenDefinitionTypeTested contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenDefinitionTypeTested from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenDefinitionTypeTested): SpecimenDefinitionTypeTested;
}
/**
 * A kind of specimen with associated set of requirements.
 */
export declare class SpecimenDefinition extends fhir.DomainResource implements fhir.ISpecimenDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition";
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.CodeableConcept[] | undefined;
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.CodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    _timeAspect?: fhir.FhirElement | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.CodeableConcept | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.SpecimenDefinitionTypeTested[] | undefined;
    /**
     * Default constructor for SpecimenDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenDefinition>);
    /**
     * Check if the current SpecimenDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenDefinition): SpecimenDefinition;
}
/**
 * Code Values for the SpecimenDefinition.typeTested.preference field
 */
export declare enum SpecimenDefinitionTypeTestedPreferenceEnum {
    PREFERRED = "preferred",
    ALTERNATE = "alternate"
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map