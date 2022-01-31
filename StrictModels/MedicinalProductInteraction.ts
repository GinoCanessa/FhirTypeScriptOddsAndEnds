// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * The specific medication, food or laboratory test that interacts.
 */
export class MedicinalProductInteractionInteractant extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductInteractionInteractant {
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemReference?: fhirModels.Reference|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductInteractionInteractant from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductInteractionInteractant) {
    super(source);
    if (source["itemReference"] !== undefined) {
      this.itemReference = new fhirModels.Reference(source.itemReference);
    }
    if (source["itemCodeableConcept"] !== undefined) {
      this.itemCodeableConcept = new fhirModels.CodeableConcept(source.itemCodeableConcept);
    }
  }
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export class MedicinalProductInteraction extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductInteraction {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductInteraction";
  /**
   * The interaction described.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication".
   */
  effect?: fhirModels.CodeableConcept|undefined;
  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  incidence?: fhirModels.CodeableConcept|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  interactant?: fhirModels.MedicinalProductInteractionInteractant[]|undefined;
  /**
   * Actions for managing the interaction.
   */
  management?: fhirModels.CodeableConcept|undefined;
  /**
   * The medication for which this is a described interaction.
   */
  subject?: fhirModels.Reference[]|undefined;
  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductInteraction from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductInteraction) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductInteraction") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductInteraction'; }
    if (source["description"] !== undefined) {
      this.description = source.description;
    }
    if (source["_description"] !== undefined) {
      this._description = new fhirModels.Element(source._description);
    }
    if (source["effect"] !== undefined) {
      this.effect = new fhirModels.CodeableConcept(source.effect);
    }
    if (source["incidence"] !== undefined) {
      this.incidence = new fhirModels.CodeableConcept(source.incidence);
    }
    if (source["interactant"] !== undefined) {
      this.interactant = source.interactant.map((x) => new fhirModels.MedicinalProductInteractionInteractant(x));
    }
    if (source["management"] !== undefined) {
      this.management = new fhirModels.CodeableConcept(source.management);
    }
    if (source["subject"] !== undefined) {
      this.subject = source.subject.map((x) => new fhirModels.Reference(x));
    }
    if (source["type"] !== undefined) {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
}
