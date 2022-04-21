// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductInteraction

import * as fhir from '../fhir.js'


/**
 * The specific medication, food or laboratory test that interacts.
 */
export type IMedicinalProductInteractionInteractant = fhir.IBackboneElement & { 
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemReference?: fhir.IReference|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  itemCodeableConcept?: fhir.ICodeableConcept|undefined;
}

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export type IMedicinalProductInteraction = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductInteraction";
  /**
   * The medication for which this is a described interaction.
   */
  subject?: fhir.IReference[]|undefined;
  /**
   * The interaction described.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductInteraction.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  interactant?: fhir.IMedicinalProductInteractionInteractant[]|undefined;
  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication".
   */
  effect?: fhir.ICodeableConcept|undefined;
  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  incidence?: fhir.ICodeableConcept|undefined;
  /**
   * Actions for managing the interaction.
   */
  management?: fhir.ICodeableConcept|undefined;
}

/**
 * The specific medication, food or laboratory test that interacts.
 */
export class MedicinalProductInteractionInteractant extends fhir.BackboneElement implements IMedicinalProductInteractionInteractant {
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  public itemReference?: fhir.Reference|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  public itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductInteractionInteractant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductInteractionInteractant> = { }) {
    super(source);
    if (source['itemReference']) { this.itemReference = new fhir.Reference(source.itemReference!); }
    if (source['itemCodeableConcept']) { this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["itemReference"]) { results.push(...this.itemReference.doModelValidation()); }
    if (this["itemCodeableConcept"]) { results.push(...this.itemCodeableConcept.doModelValidation()); }
    return results;
  }
}

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export class MedicinalProductInteraction extends fhir.DomainResource implements IMedicinalProductInteraction {
  /**
   * Resource Type Name
   */
  public resourceType: "MedicinalProductInteraction";
  /**
   * The medication for which this is a described interaction.
   */
  public subject?: fhir.Reference[]|undefined;
  /**
   * The interaction described.
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductInteraction.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  public interactant?: fhir.MedicinalProductInteractionInteractant[]|undefined;
  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication".
   */
  public effect?: fhir.CodeableConcept|undefined;
  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  public incidence?: fhir.CodeableConcept|undefined;
  /**
   * Actions for managing the interaction.
   */
  public management?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductInteraction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductInteraction> = { }) {
    super(source);
    this.resourceType = 'MedicinalProductInteraction';
    if (source['subject']) { this.subject = source.subject.map((x) => new fhir.Reference(x)); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['interactant']) { this.interactant = source.interactant.map((x) => new fhir.MedicinalProductInteractionInteractant(x)); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['effect']) { this.effect = new fhir.CodeableConcept(source.effect!); }
    if (source['incidence']) { this.incidence = new fhir.CodeableConcept(source.incidence!); }
    if (source['management']) { this.management = new fhir.CodeableConcept(source.management!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: MedicinalProductInteraction.resourceType']); }
    if (this["subject"]) { this.subject.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["interactant"]) { this.interactant.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["effect"]) { results.push(...this.effect.doModelValidation()); }
    if (this["incidence"]) { results.push(...this.incidence.doModelValidation()); }
    if (this["management"]) { results.push(...this.management.doModelValidation()); }
    return results;
  }
}
