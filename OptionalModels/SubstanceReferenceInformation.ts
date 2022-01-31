// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Todo.
 */
export class SubstanceReferenceInformationGene extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationGene {
  /**
   * Todo.
   */
  gene?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  geneSequenceOrigin?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  source?: fhirModels.Reference[]|undefined;
  /**
   * Default constructor for SubstanceReferenceInformationGene from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstanceReferenceInformationGene>) {
    super(source);
    if (source["gene"] !== undefined) { this.gene = new fhirModels.CodeableConcept(source.gene); }
    if (source["geneSequenceOrigin"] !== undefined) { this.geneSequenceOrigin = new fhirModels.CodeableConcept(source.geneSequenceOrigin); }
    if (source["source"] !== undefined) { this.source = source.source.map((x) => new fhirModels.Reference(x)); }
  }
  /**
   * Factory function to create a SubstanceReferenceInformationGene from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstanceReferenceInformationGene):SubstanceReferenceInformationGene {
    var dest:SubstanceReferenceInformationGene = new SubstanceReferenceInformationGene(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstanceReferenceInformationGene is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstanceReferenceInformationGene contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstanceReferenceInformationGeneElement extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationGeneElement {
  /**
   * Todo.
   */
  element?: fhirModels.Identifier|undefined;
  /**
   * Todo.
   */
  source?: fhirModels.Reference[]|undefined;
  /**
   * Todo.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceReferenceInformationGeneElement from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstanceReferenceInformationGeneElement>) {
    super(source);
    if (source["element"] !== undefined) { this.element = new fhirModels.Identifier(source.element); }
    if (source["source"] !== undefined) { this.source = source.source.map((x) => new fhirModels.Reference(x)); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a SubstanceReferenceInformationGeneElement from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstanceReferenceInformationGeneElement):SubstanceReferenceInformationGeneElement {
    var dest:SubstanceReferenceInformationGeneElement = new SubstanceReferenceInformationGeneElement(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstanceReferenceInformationGeneElement is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstanceReferenceInformationGeneElement contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstanceReferenceInformationClassification extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationClassification {
  /**
   * Todo.
   */
  classification?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  domain?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  source?: fhirModels.Reference[]|undefined;
  /**
   * Todo.
   */
  subtype?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Default constructor for SubstanceReferenceInformationClassification from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstanceReferenceInformationClassification>) {
    super(source);
    if (source["classification"] !== undefined) { this.classification = new fhirModels.CodeableConcept(source.classification); }
    if (source["domain"] !== undefined) { this.domain = new fhirModels.CodeableConcept(source.domain); }
    if (source["source"] !== undefined) { this.source = source.source.map((x) => new fhirModels.Reference(x)); }
    if (source["subtype"] !== undefined) { this.subtype = source.subtype.map((x) => new fhirModels.CodeableConcept(x)); }
  }
  /**
   * Factory function to create a SubstanceReferenceInformationClassification from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstanceReferenceInformationClassification):SubstanceReferenceInformationClassification {
    var dest:SubstanceReferenceInformationClassification = new SubstanceReferenceInformationClassification(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstanceReferenceInformationClassification is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstanceReferenceInformationClassification contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstanceReferenceInformationTarget extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceReferenceInformationTarget {
  /**
   * Todo.
   */
  amountQuantity?: fhirModels.Quantity|undefined;
  /**
   * Todo.
   */
  amountRange?: fhirModels.Range|undefined;
  /**
   * Todo.
   */
  amountString?: string|undefined;
  _amountString?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  amountType?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  interaction?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  organism?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  organismType?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  source?: fhirModels.Reference[]|undefined;
  /**
   * Todo.
   */
  target?: fhirModels.Identifier|undefined;
  /**
   * Todo.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstanceReferenceInformationTarget from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstanceReferenceInformationTarget>) {
    super(source);
    if (source["amountQuantity"] !== undefined) { this.amountQuantity = new fhirModels.Quantity(source.amountQuantity); }
    if (source["amountRange"] !== undefined) { this.amountRange = new fhirModels.Range(source.amountRange); }
    if (source["amountString"] !== undefined) { this.amountString = source.amountString; }
    if (source["_amountString"] !== undefined) { this._amountString = new fhirModels.Element(source._amountString); }
    if (source["amountType"] !== undefined) { this.amountType = new fhirModels.CodeableConcept(source.amountType); }
    if (source["interaction"] !== undefined) { this.interaction = new fhirModels.CodeableConcept(source.interaction); }
    if (source["organism"] !== undefined) { this.organism = new fhirModels.CodeableConcept(source.organism); }
    if (source["organismType"] !== undefined) { this.organismType = new fhirModels.CodeableConcept(source.organismType); }
    if (source["source"] !== undefined) { this.source = source.source.map((x) => new fhirModels.Reference(x)); }
    if (source["target"] !== undefined) { this.target = new fhirModels.Identifier(source.target); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a SubstanceReferenceInformationTarget from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstanceReferenceInformationTarget):SubstanceReferenceInformationTarget {
    var dest:SubstanceReferenceInformationTarget = new SubstanceReferenceInformationTarget(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstanceReferenceInformationTarget is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstanceReferenceInformationTarget contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstanceReferenceInformation extends fhirModels.DomainResource implements fhirInterfaces.ISubstanceReferenceInformation {
  /**
   * Resource Type Name
   */
  readonly resourceType = "SubstanceReferenceInformation";
  /**
   * Todo.
   */
  classification?: fhirModels.SubstanceReferenceInformationClassification[]|undefined;
  /**
   * Todo.
   */
  comment?: string|undefined;
  _comment?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  gene?: fhirModels.SubstanceReferenceInformationGene[]|undefined;
  /**
   * Todo.
   */
  geneElement?: fhirModels.SubstanceReferenceInformationGeneElement[]|undefined;
  /**
   * Todo.
   */
  target?: fhirModels.SubstanceReferenceInformationTarget[]|undefined;
  /**
   * Default constructor for SubstanceReferenceInformation from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstanceReferenceInformation>) {
    super(source);
    if ((source['resourceType'] !== "SubstanceReferenceInformation") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a SubstanceReferenceInformation'; }
    if (source["classification"] !== undefined) { this.classification = source.classification.map((x) => new fhirModels.SubstanceReferenceInformationClassification(x)); }
    if (source["comment"] !== undefined) { this.comment = source.comment; }
    if (source["_comment"] !== undefined) { this._comment = new fhirModels.Element(source._comment); }
    if (source["gene"] !== undefined) { this.gene = source.gene.map((x) => new fhirModels.SubstanceReferenceInformationGene(x)); }
    if (source["geneElement"] !== undefined) { this.geneElement = source.geneElement.map((x) => new fhirModels.SubstanceReferenceInformationGeneElement(x)); }
    if (source["target"] !== undefined) { this.target = source.target.map((x) => new fhirModels.SubstanceReferenceInformationTarget(x)); }
  }
  /**
   * Factory function to create a SubstanceReferenceInformation from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstanceReferenceInformation):SubstanceReferenceInformation {
    var dest:SubstanceReferenceInformation = new SubstanceReferenceInformation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstanceReferenceInformation is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstanceReferenceInformation contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}