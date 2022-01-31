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
 * Describe the undesirable effects of the medicinal product.
 */
export class MedicinalProductUndesirableEffect extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductUndesirableEffect {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductUndesirableEffect";
  /**
   * Classification of the effect.
   */
  classification?: fhirModels.CodeableConcept|undefined;
  /**
   * The frequency of occurrence of the effect.
   */
  frequencyOfOccurrence?: fhirModels.CodeableConcept|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhirModels.Population[]|undefined;
  /**
   * The medication for which this is an indication.
   */
  subject?: fhirModels.Reference[]|undefined;
  /**
   * The symptom, condition or undesirable effect.
   */
  symptomConditionEffect?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductUndesirableEffect from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductUndesirableEffect>) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductUndesirableEffect") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductUndesirableEffect'; }
    if (source["classification"] !== undefined) { this.classification = new fhirModels.CodeableConcept(source.classification); }
    if (source["frequencyOfOccurrence"] !== undefined) { this.frequencyOfOccurrence = new fhirModels.CodeableConcept(source.frequencyOfOccurrence); }
    if (source["population"] !== undefined) { this.population = source.population.map((x) => new fhirModels.Population(x)); }
    if (source["subject"] !== undefined) { this.subject = source.subject.map((x) => new fhirModels.Reference(x)); }
    if (source["symptomConditionEffect"] !== undefined) { this.symptomConditionEffect = new fhirModels.CodeableConcept(source.symptomConditionEffect); }
  }
  /**
   * Factory function to create a MedicinalProductUndesirableEffect from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductUndesirableEffect):MedicinalProductUndesirableEffect {
    var dest:MedicinalProductUndesirableEffect = new MedicinalProductUndesirableEffect(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductUndesirableEffect is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductUndesirableEffect contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}