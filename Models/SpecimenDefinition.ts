// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends fhirModels.BackboneElement {
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhirModels.CodeableConcept;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: SpecimenDefinitionTypeTestedContainerAdditive) {
    super(source);
    if (source["additiveCodeableConcept"] !== undefined) { this.additiveCodeableConcept = source.additiveCodeableConcept; }
    if (source["additiveReference"] !== undefined) { this.additiveReference = source.additiveReference; }
  }
}
/**
 * The specimen's container.
 */
export class SpecimenDefinitionTypeTestedContainer extends fhirModels.BackboneElement {
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: fhirModels.SpecimenDefinitionTypeTestedContainerAdditive[];
  /**
   * Color of container cap.
   */
  cap?: fhirModels.CodeableConcept;
  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  capacity?: fhirModels.Quantity;
  /**
   * The textual description of the kind of container.
   */
  description?: string;
  _description?: fhirModels.Element;
  /**
   * The type of material of the container.
   */
  material?: fhirModels.CodeableConcept;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeQuantity?: fhirModels.Quantity;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeString?: string;
  _minimumVolumeString?: fhirModels.Element;
  /**
   * Special processing that should be applied to the container for this kind of specimen.
   */
  preparation?: string;
  _preparation?: fhirModels.Element;
  /**
   * The type of container used to contain this kind of specimen.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: SpecimenDefinitionTypeTestedContainer) {
    super(source);
    if (source["additive"] !== undefined) { this.additive = source.additive; }
    if (source["cap"] !== undefined) { this.cap = source.cap; }
    if (source["capacity"] !== undefined) { this.capacity = source.capacity; }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = source._description; }
    if (source["material"] !== undefined) { this.material = source.material; }
    if (source["minimumVolumeQuantity"] !== undefined) { this.minimumVolumeQuantity = source.minimumVolumeQuantity; }
    if (source["minimumVolumeString"] !== undefined) { this.minimumVolumeString = source.minimumVolumeString; }
    if (source["_minimumVolumeString"] !== undefined) { this._minimumVolumeString = source._minimumVolumeString; }
    if (source["preparation"] !== undefined) { this.preparation = source.preparation; }
    if (source["_preparation"] !== undefined) { this._preparation = source._preparation; }
    if (source["type"] !== undefined) { this.type = source.type; }
  }
}
/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export class SpecimenDefinitionTypeTestedHandling extends fhirModels.BackboneElement {
  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
   */
  instruction?: string;
  _instruction?: fhirModels.Element;
  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  maxDuration?: fhirModels.Duration;
  /**
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   */
  temperatureQualifier?: fhirModels.CodeableConcept;
  /**
   * The temperature interval for this set of handling instructions.
   */
  temperatureRange?: fhirModels.Range;
  /**
   * Default constructor
   */
  constructor(source: SpecimenDefinitionTypeTestedHandling) {
    super(source);
    if (source["instruction"] !== undefined) { this.instruction = source.instruction; }
    if (source["_instruction"] !== undefined) { this._instruction = source._instruction; }
    if (source["maxDuration"] !== undefined) { this.maxDuration = source.maxDuration; }
    if (source["temperatureQualifier"] !== undefined) { this.temperatureQualifier = source.temperatureQualifier; }
    if (source["temperatureRange"] !== undefined) { this.temperatureRange = source.temperatureRange; }
  }
}
/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export class SpecimenDefinitionTypeTested extends fhirModels.BackboneElement {
  /**
   * The specimen's container.
   */
  container?: fhirModels.SpecimenDefinitionTypeTestedContainer;
  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   */
  handling?: fhirModels.SpecimenDefinitionTypeTestedHandling[];
  /**
   * Primary of secondary specimen.
   */
  isDerived?: boolean;
  _isDerived?: fhirModels.Element;
  /**
   * The preference for this type of conditioned specimen.
   */
  preference: SpecimenDefinitionTypeTestedPreferenceEnum;
  _preference?: fhirModels.Element;
  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   */
  rejectionCriterion?: fhirModels.CodeableConcept[];
  /**
   * Requirements for delivery and special handling of this kind of conditioned specimen.
   */
  requirement?: string;
  _requirement?: fhirModels.Element;
  /**
   * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   */
  retentionTime?: fhirModels.Duration;
  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: SpecimenDefinitionTypeTested) {
    super(source);
    if (source["container"] !== undefined) { this.container = source.container; }
    if (source["handling"] !== undefined) { this.handling = source.handling; }
    if (source["isDerived"] !== undefined) { this.isDerived = source.isDerived; }
    if (source["_isDerived"] !== undefined) { this._isDerived = source._isDerived; }
    if (source["preference"] === undefined) { throw 'Missing required element preference';}
    this.preference = source.preference;
    if (source["_preference"] !== undefined) { this._preference = source._preference; }
    if (source["rejectionCriterion"] !== undefined) { this.rejectionCriterion = source.rejectionCriterion; }
    if (source["requirement"] !== undefined) { this.requirement = source.requirement; }
    if (source["_requirement"] !== undefined) { this._requirement = source._requirement; }
    if (source["retentionTime"] !== undefined) { this.retentionTime = source.retentionTime; }
    if (source["type"] !== undefined) { this.type = source.type; }
  }
}
/**
 * Code Values for the SpecimenDefinition.typeTested.preference field
 */
export enum SpecimenDefinitionTypeTestedPreferenceEnum {
  PREFERRED = "preferred",
  ALTERNATE = "alternate",
}
/**
 * A kind of specimen with associated set of requirements.
 */
export class SpecimenDefinition extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "SpecimenDefinition";
  /**
   * The action to be performed for collecting the specimen.
   */
  collection?: fhirModels.CodeableConcept[];
  /**
   * A business identifier associated with the kind of specimen.
   */
  identifier?: fhirModels.Identifier;
  /**
   * Preparation of the patient for specimen collection.
   */
  patientPreparation?: fhirModels.CodeableConcept[];
  /**
   * Time aspect of specimen collection (duration or offset).
   */
  timeAspect?: string;
  _timeAspect?: fhirModels.Element;
  /**
   * The kind of material to be collected.
   */
  typeCollected?: fhirModels.CodeableConcept;
  /**
   * Specimen conditioned in a container as expected by the testing laboratory.
   */
  typeTested?: fhirModels.SpecimenDefinitionTypeTested[];
  /**
   * Default constructor
   */
  constructor(source: SpecimenDefinition) {
    super(source);
    if ((source['resourceType'] !== "SpecimenDefinition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a SpecimenDefinition'; }
    if (source["collection"] !== undefined) { this.collection = source.collection; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["patientPreparation"] !== undefined) { this.patientPreparation = source.patientPreparation; }
    if (source["timeAspect"] !== undefined) { this.timeAspect = source.timeAspect; }
    if (source["_timeAspect"] !== undefined) { this._timeAspect = source._timeAspect; }
    if (source["typeCollected"] !== undefined) { this.typeCollected = source.typeCollected; }
    if (source["typeTested"] !== undefined) { this.typeTested = source.typeTested; }
  }
}
