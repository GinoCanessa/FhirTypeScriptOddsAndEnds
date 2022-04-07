// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Characteristics e.g. a products onset of action.
 */
export interface IMedicinalProductPharmaceuticalCharacteristics extends fhirInterfaces.IBackboneElement {
  /**
   * A coded characteristic.
   */
  code: fhirInterfaces.ICodeableConcept;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: fhirInterfaces.ICodeableConcept|undefined;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhirInterfaces.IBackboneElement {
  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: string|undefined;
  _supportingInformation?: fhirInterfaces.IElement|undefined;
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue: fhirInterfaces.ICodeableConcept;
  /**
   * A value for the time.
   */
  value: fhirInterfaces.IQuantity;
}
/**
 * A species for which this route applies.
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhirInterfaces.IBackboneElement {
  /**
   * Coded expression for the species.
   */
  code: fhirInterfaces.ICodeableConcept;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[]|undefined;
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministration extends fhirInterfaces.IBackboneElement {
  /**
   * Coded expression for the route.
   */
  code: fhirInterfaces.ICodeableConcept;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: fhirInterfaces.IQuantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: fhirInterfaces.IQuantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: fhirInterfaces.IRatio|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: fhirInterfaces.IQuantity|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: fhirInterfaces.IDuration|undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[]|undefined;
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export interface IMedicinalProductPharmaceutical extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "MedicinalProductPharmaceutical";
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  administrableDoseForm: fhirInterfaces.ICodeableConcept;
  /**
   * Characteristics e.g. a products onset of action.
   */
  characteristics?: fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics[]|undefined;
  /**
   * Accompanying device.
   */
  device?: fhirInterfaces.IReference[]|undefined;
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  identifier?: fhirInterfaces.IIdentifier[]|undefined;
  /**
   * Ingredient.
   */
  ingredient?: fhirInterfaces.IReference[]|undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  routeOfAdministration: fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration[];
  /**
   * Todo.
   */
  unitOfPresentation?: fhirInterfaces.ICodeableConcept|undefined;
}
