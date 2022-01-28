// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export class MedicinalProductContraindicationOtherTherapy extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductContraindicationOtherTherapy {
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
   */
  medicationReference?: fhirModels.Reference|undefined;
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  therapyRelationshipType: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductContraindicationOtherTherapy from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductContraindicationOtherTherapy>) {
    super(source);
    if (source["medicationCodeableConcept"] !== undefined) { this.medicationCodeableConcept = new fhirModels.CodeableConcept(source.medicationCodeableConcept); }
    if (source["medicationReference"] !== undefined) { this.medicationReference = new fhirModels.Reference(source.medicationReference); }
    if (source["therapyRelationshipType"] !== undefined) { this.therapyRelationshipType = new fhirModels.CodeableConcept(source.therapyRelationshipType); }
  }
  /**
   * Check if the current MedicinalProductContraindicationOtherTherapy contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["therapyRelationshipType"] === undefined) { missingElements.push("therapyRelationshipType"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicinalProductContraindicationOtherTherapy from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductContraindicationOtherTherapy):MedicinalProductContraindicationOtherTherapy {
    var dest:MedicinalProductContraindicationOtherTherapy = new MedicinalProductContraindicationOtherTherapy(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductContraindicationOtherTherapy is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export class MedicinalProductContraindication extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductContraindication {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductContraindication";
  /**
   * A comorbidity (concurrent condition) or coinfection.
   */
  comorbidity?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The disease, symptom or procedure for the contraindication.
   */
  disease?: fhirModels.CodeableConcept|undefined;
  /**
   * The status of the disease or symptom for the contraindication.
   */
  diseaseStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: fhirModels.MedicinalProductContraindicationOtherTherapy[]|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhirModels.Population[]|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhirModels.Reference[]|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication.
   */
  therapeuticIndication?: fhirModels.Reference[]|undefined;
  /**
   * Default constructor for MedicinalProductContraindication from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductContraindication>) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductContraindication") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductContraindication'; }
    if (source["comorbidity"] !== undefined) { this.comorbidity = source.comorbidity.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["disease"] !== undefined) { this.disease = new fhirModels.CodeableConcept(source.disease); }
    if (source["diseaseStatus"] !== undefined) { this.diseaseStatus = new fhirModels.CodeableConcept(source.diseaseStatus); }
    if (source["otherTherapy"] !== undefined) { this.otherTherapy = source.otherTherapy.map((x) => new fhirModels.MedicinalProductContraindicationOtherTherapy(x)); }
    if (source["population"] !== undefined) { this.population = source.population.map((x) => new fhirModels.Population(x)); }
    if (source["subject"] !== undefined) { this.subject = source.subject.map((x) => new fhirModels.Reference(x)); }
    if (source["therapeuticIndication"] !== undefined) { this.therapeuticIndication = source.therapeuticIndication.map((x) => new fhirModels.Reference(x)); }
  }
  /**
   * Check if the current MedicinalProductContraindication contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MedicinalProductContraindication from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductContraindication):MedicinalProductContraindication {
    var dest:MedicinalProductContraindication = new MedicinalProductContraindication(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductContraindication is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
