import * as fhir from '../fhir.js';
import { V20371ValueSetType } from '../fhirValueSets/V20371ValueSet.js';
import { ContainerMaterialValueSetType } from '../fhirValueSets/ContainerMaterialValueSet.js';
import { SpecimenContainerTypeValueSetType } from '../fhirValueSets/SpecimenContainerTypeValueSet.js';
import { ContainerCapValueSetType } from '../fhirValueSets/ContainerCapValueSet.js';
import { HandlingConditionValueSetType } from '../fhirValueSets/HandlingConditionValueSet.js';
import { V20487ValueSetType } from '../fhirValueSets/V20487ValueSet.js';
import { SpecimenContainedPreferenceValueSetType, SpecimenContainedPreferenceValueSetEnum } from '../fhirValueSets/SpecimenContainedPreferenceValueSet.js';
import { RejectionCriteriaValueSetType } from '../fhirValueSets/RejectionCriteriaValueSet.js';
import { PreparePatientPriorSpecimenCollectionValueSetType } from '../fhirValueSets/PreparePatientPriorSpecimenCollectionValueSet.js';
import { SpecimenCollectionValueSetType } from '../fhirValueSets/SpecimenCollectionValueSet.js';
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
     * The type of material of the container.
     */
    material?: fhir.ICodeableConcept | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.ICodeableConcept | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.IQuantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.IQuantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.minimumVolume[x]
     */
    _minimumVolumeString?: fhir.IFhirElement | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.ISpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.preparation
     */
    _preparation?: fhir.IFhirElement | undefined;
};
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare type ISpecimenDefinitionTypeTestedHandling = fhir.IBackboneElement & {
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.ICodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.IRange | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.IDuration | undefined;
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.handling.instruction
     */
    _instruction?: fhir.IFhirElement | undefined;
};
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare type ISpecimenDefinitionTypeTested = fhir.IBackboneElement & {
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.isDerived
     */
    _isDerived?: fhir.IFhirElement | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenContainedPreferenceValueSetEnum | null;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.preference
     */
    _preference?: fhir.IFhirElement | undefined;
    /**
     * The specimen's container.
     */
    container?: fhir.ISpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.requirement
     */
    _requirement?: fhir.IFhirElement | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.IDuration | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.ICodeableConcept[] | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.ISpecimenDefinitionTypeTestedHandling[] | undefined;
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
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.ICodeableConcept | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.ICodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.timeAspect
     */
    _timeAspect?: fhir.IFhirElement | undefined;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.ICodeableConcept[] | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.ISpecimenDefinitionTypeTested[] | undefined;
};
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export declare class SpecimenDefinitionTypeTestedContainerAdditive extends fhir.BackboneElement implements ISpecimenDefinitionTypeTestedContainerAdditive {
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
    constructor(source?: Partial<ISpecimenDefinitionTypeTestedContainerAdditive>);
    /**
     * Example-bound Value Set for additiveCodeableConcept
     */
    additiveCodeableConceptExampleValueSet(): V20371ValueSetType;
    /**
     * Example-bound Value Set for additiveReference
     */
    additiveReferenceExampleValueSet(): V20371ValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The specimen's container.
 */
export declare class SpecimenDefinitionTypeTestedContainer extends fhir.BackboneElement implements ISpecimenDefinitionTypeTestedContainer {
    /**
     * The type of material of the container.
     */
    material?: fhir.CodeableConcept | undefined;
    /**
     * The type of container used to contain this kind of specimen.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Color of container cap.
     */
    cap?: fhir.CodeableConcept | undefined;
    /**
     * The textual description of the kind of container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The capacity (volume or other measure) of this kind of container.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeQuantity?: fhir.Quantity | undefined;
    /**
     * The minimum volume to be conditioned in the container.
     */
    minimumVolumeString?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.minimumVolume[x]
     */
    _minimumVolumeString?: fhir.FhirElement | undefined;
    /**
     * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additive?: fhir.SpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
    /**
     * Special processing that should be applied to the container for this kind of specimen.
     */
    preparation?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.container.preparation
     */
    _preparation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenDefinitionTypeTestedContainer>);
    /**
     * Example-bound Value Set for material
     */
    materialExampleValueSet(): ContainerMaterialValueSetType;
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): SpecimenContainerTypeValueSetType;
    /**
     * Example-bound Value Set for cap
     */
    capExampleValueSet(): ContainerCapValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export declare class SpecimenDefinitionTypeTestedHandling extends fhir.BackboneElement implements ISpecimenDefinitionTypeTestedHandling {
    /**
     * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
     */
    temperatureQualifier?: fhir.CodeableConcept | undefined;
    /**
     * The temperature interval for this set of handling instructions.
     */
    temperatureRange?: fhir.Range | undefined;
    /**
     * The maximum time interval of preservation of the specimen with these conditions.
     */
    maxDuration?: fhir.Duration | undefined;
    /**
     * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.handling.instruction
     */
    _instruction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTestedHandling - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenDefinitionTypeTestedHandling>);
    /**
     * Example-bound Value Set for temperatureQualifier
     */
    temperatureQualifierExampleValueSet(): HandlingConditionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export declare class SpecimenDefinitionTypeTested extends fhir.BackboneElement implements ISpecimenDefinitionTypeTested {
    /**
     * Primary of secondary specimen.
     */
    isDerived?: boolean | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.isDerived
     */
    _isDerived?: fhir.FhirElement | undefined;
    /**
     * The kind of specimen conditioned for testing expected by lab.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The preference for this type of conditioned specimen.
     */
    preference: SpecimenContainedPreferenceValueSetEnum | null;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.preference
     */
    _preference?: fhir.FhirElement | undefined;
    /**
     * The specimen's container.
     */
    container?: fhir.SpecimenDefinitionTypeTestedContainer | undefined;
    /**
     * Requirements for delivery and special handling of this kind of conditioned specimen.
     */
    requirement?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.typeTested.requirement
     */
    _requirement?: fhir.FhirElement | undefined;
    /**
     * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
     */
    retentionTime?: fhir.Duration | undefined;
    /**
     * Criterion for rejection of the specimen in its container by the laboratory.
     */
    rejectionCriterion?: fhir.CodeableConcept[] | undefined;
    /**
     * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
     */
    handling?: fhir.SpecimenDefinitionTypeTestedHandling[] | undefined;
    /**
     * Default constructor for SpecimenDefinitionTypeTested - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenDefinitionTypeTested>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): V20487ValueSetType;
    /**
     * Required-bound Value Set for preference
     */
    preferenceRequiredValueSet(): SpecimenContainedPreferenceValueSetType;
    /**
     * Example-bound Value Set for rejectionCriterion
     */
    rejectionCriterionExampleValueSet(): RejectionCriteriaValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A kind of specimen with associated set of requirements.
 */
export declare class SpecimenDefinition extends fhir.DomainResource implements ISpecimenDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "SpecimenDefinition";
    /**
     * A business identifier associated with the kind of specimen.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The kind of material to be collected.
     */
    typeCollected?: fhir.CodeableConcept | undefined;
    /**
     * Preparation of the patient for specimen collection.
     */
    patientPreparation?: fhir.CodeableConcept[] | undefined;
    /**
     * Time aspect of specimen collection (duration or offset).
     */
    timeAspect?: string | undefined;
    /**
     * Extended properties for primitive element: SpecimenDefinition.timeAspect
     */
    _timeAspect?: fhir.FhirElement | undefined;
    /**
     * The action to be performed for collecting the specimen.
     */
    collection?: fhir.CodeableConcept[] | undefined;
    /**
     * Specimen conditioned in a container as expected by the testing laboratory.
     */
    typeTested?: fhir.SpecimenDefinitionTypeTested[] | undefined;
    /**
     * Default constructor for SpecimenDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenDefinition>);
    /**
     * Example-bound Value Set for typeCollected
     */
    typeCollectedExampleValueSet(): V20487ValueSetType;
    /**
     * Example-bound Value Set for patientPreparation
     */
    patientPreparationExampleValueSet(): PreparePatientPriorSpecimenCollectionValueSetType;
    /**
     * Example-bound Value Set for collection
     */
    collectionExampleValueSet(): SpecimenCollectionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map