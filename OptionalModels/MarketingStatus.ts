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
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export class MarketingStatus extends fhirModels.BackboneElement implements fhirInterfaces.IMarketingStatus {
  /**
   * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.
   */
  country?: fhirModels.CodeableConcept|undefined;
  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
   */
  dateRange?: fhirModels.Period|undefined;
  /**
   * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.
   */
  jurisdiction?: fhirModels.CodeableConcept|undefined;
  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
   */
  restoreDate?: string|undefined;
  _restoreDate?: fhirModels.Element|undefined;
  /**
   * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.
   */
  status?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MarketingStatus from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMarketingStatus>) {
    super(source);
    if (source["country"] !== undefined) { this.country = new fhirModels.CodeableConcept(source.country); }
    if (source["dateRange"] !== undefined) { this.dateRange = new fhirModels.Period(source.dateRange); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = new fhirModels.CodeableConcept(source.jurisdiction); }
    if (source["restoreDate"] !== undefined) { this.restoreDate = source.restoreDate; }
    if (source["_restoreDate"] !== undefined) { this._restoreDate = new fhirModels.Element(source._restoreDate); }
    if (source["status"] !== undefined) { this.status = new fhirModels.CodeableConcept(source.status); }
  }
  /**
   * Factory function to create a MarketingStatus from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMarketingStatus):MarketingStatus {
    var dest:MarketingStatus = new MarketingStatus(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MarketingStatus is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MarketingStatus contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["country"] === undefined) { missingElements.push("country"); }
    if (this["dateRange"] === undefined) { missingElements.push("dateRange"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}