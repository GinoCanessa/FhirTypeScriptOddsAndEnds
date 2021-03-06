// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Substance

import * as fhir from '../fhir.js';

import { SubstanceStatusValueSet, SubstanceStatusValueSetType,} from '../fhirValueSets/SubstanceStatusValueSet.js';
import { SubstanceStatusValueSetEnum } from '../valueSetEnums.js';
import { SubstanceCategoryValueSet, SubstanceCategoryValueSetType,} from '../fhirValueSets/SubstanceCategoryValueSet.js';
import { SubstanceCategoryValueSetEnum } from '../valueSetEnums.js';
import { SubstanceCodeValueSet, SubstanceCodeValueSetType,} from '../fhirValueSets/SubstanceCodeValueSet.js';
import { SubstanceCodeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the SubstanceInstance type.
 */
export interface SubstanceInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  expiry?: fhir.FhirDateTime|string|undefined;
  /**
   * The amount of the substance.
   */
  quantity?: fhir.QuantityArgs|undefined;
}

/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export class SubstanceInstance extends fhir.BackboneElement {
  readonly __dataType:string = 'SubstanceInstance';
  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  public expiry?: fhir.FhirDateTime|undefined;
  /**
   * The amount of the substance.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['expiry']) { this.expiry = new fhir.FhirDateTime({value: source.expiry}); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["identifier"]) { outcome.issue!.push(...this.identifier.doModelValidation().issue!); }
    if (this["expiry"]) { outcome.issue!.push(...this.expiry.doModelValidation().issue!); }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the SubstanceIngredient type.
 */
export interface SubstanceIngredientArgs extends fhir.BackboneElementArgs {
  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  quantity?: fhir.RatioArgs|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substance?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceReference?: fhir.ReferenceArgs|undefined;
}

/**
 * A substance can be composed of other substances.
 */
export class SubstanceIngredient extends fhir.BackboneElement {
  readonly __dataType:string = 'SubstanceIngredient';
  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  public quantity?: fhir.Ratio|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  public substance: (fhir.CodeableConcept|fhir.Reference)|null;
  readonly __substanceIsChoice:true = true;
  /**
   * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceIngredientArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['quantity']) { this.quantity = new fhir.Ratio(source.quantity); }
    if (source['substance']) { this.substance = source.substance; }
    else if (source['substanceCodeableConcept']) { this.substance = new fhir.CodeableConcept(source.substanceCodeableConcept); }
    else if (source['substanceReference']) { this.substance = new fhir.Reference(source.substanceReference); }
    else { this.substance = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (!this['substance']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property substance: fhir: Substance.ingredient.substance[x]:", }));
    }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the Substance type.
 */
export interface SubstanceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Substance"|undefined;
  /**
   * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A code to indicate if the substance is actively used.
   */
  status?: SubstanceStatusValueSetEnum|undefined;
  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  instance?: fhir.SubstanceInstanceArgs[]|undefined;
  /**
   * A substance can be composed of other substances.
   */
  ingredient?: fhir.SubstanceIngredientArgs[]|undefined;
}

/**
 * A homogeneous material with a definite composition.
 */
export class Substance extends fhir.DomainResource {
  readonly __dataType:string = 'Substance';
  /**
   * Resource Type Name
   */
  public resourceType: "Substance";
  /**
   * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * A code to indicate if the substance is actively used.
   */
  public status?: SubstanceStatusValueSetEnum|undefined;
  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
   */
  public category?: fhir.CodeableConcept[]|undefined = [];
  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  public instance?: fhir.SubstanceInstance[]|undefined = [];
  /**
   * A substance can be composed of other substances.
   */
  public ingredient?: fhir.SubstanceIngredient[]|undefined = [];
  /**
   * Default constructor for Substance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Substance';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.SubstanceInstance(x)); }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.SubstanceIngredient(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():SubstanceStatusValueSetType {
    return SubstanceStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for category
   */
  public static categoryExtensibleValueSet():SubstanceCategoryValueSetType {
    return SubstanceCategoryValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():SubstanceCodeValueSetType {
    return SubstanceCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Substance' fhir: Substance.resourceType:'Substance'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["category"]) { this.category.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:fhir.CodeableConcept fhir: Substance.code:CodeableConcept", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["instance"]) { this.instance.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["ingredient"]) { this.ingredient.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
