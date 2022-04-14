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
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
 */
export class MedicinalProductIndicationOtherTherapy extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductIndicationOtherTherapy {
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
  therapyRelationshipType: fhirModels.CodeableConcept;
  /**
   * Default constructor for MedicinalProductIndicationOtherTherapy from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductIndicationOtherTherapy) {
    super(source);
    if (source["medicationCodeableConcept"] !== undefined) {
      this.medicationCodeableConcept = new fhirModels.CodeableConcept(source.medicationCodeableConcept);
    }
    if (source["medicationReference"] !== undefined) {
      this.medicationReference = new fhirModels.Reference(source.medicationReference);
    }
    {
      this.therapyRelationshipType = new fhirModels.CodeableConcept(source.therapyRelationshipType);
    }
  }
}
/**
 * Indication for the Medicinal Product.
 */
export class MedicinalProductIndication extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductIndication {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductIndication";
  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication.
   */
  comorbidity?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The status of the disease or symptom for which the indication applies.
   */
  diseaseStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * The disease, symptom or procedure that is the indication for treatment.
   */
  diseaseSymptomProcedure?: fhirModels.CodeableConcept|undefined;
  /**
   * Timing or duration information as part of the indication.
   */
  duration?: fhirModels.Quantity|undefined;
  /**
   * The intended effect, aim or strategy to be achieved by the indication.
   */
  intendedEffect?: fhirModels.CodeableConcept|undefined;
  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  otherTherapy?: fhirModels.MedicinalProductIndicationOtherTherapy[]|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhirModels.Population[]|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhirModels.Reference[]|undefined;
  /**
   * Describe the undesirable effects of the medicinal product.
   */
  undesirableEffect?: fhirModels.Reference[]|undefined;
  /**
   * Default constructor for MedicinalProductIndication from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IMedicinalProductIndication) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductIndication") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductIndication'; }
    if (source["comorbidity"] !== undefined) {
      this.comorbidity = source.comorbidity.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["diseaseStatus"] !== undefined) {
      this.diseaseStatus = new fhirModels.CodeableConcept(source.diseaseStatus);
    }
    if (source["diseaseSymptomProcedure"] !== undefined) {
      this.diseaseSymptomProcedure = new fhirModels.CodeableConcept(source.diseaseSymptomProcedure);
    }
    if (source["duration"] !== undefined) {
      this.duration = new fhirModels.Quantity(source.duration);
    }
    if (source["intendedEffect"] !== undefined) {
      this.intendedEffect = new fhirModels.CodeableConcept(source.intendedEffect);
    }
    if (source["otherTherapy"] !== undefined) {
      this.otherTherapy = source.otherTherapy.map((x) => new fhirModels.MedicinalProductIndicationOtherTherapy(x));
    }
    if (source["population"] !== undefined) {
      this.population = source.population.map((x) => new fhirModels.Population(x));
    }
    if (source["subject"] !== undefined) {
      this.subject = source.subject.map((x) => new fhirModels.Reference(x));
    }
    if (source["undesirableEffect"] !== undefined) {
      this.undesirableEffect = source.undesirableEffect.map((x) => new fhirModels.Reference(x));
    }
  }
}
