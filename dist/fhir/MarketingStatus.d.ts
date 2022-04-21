import * as fhir from '../fhir.js';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare type IMarketingStatus = fhir.IBackboneElement & {
    /**
     * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.
     */
    country: fhir.ICodeableConcept | null;
    /**
     * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.
     */
    jurisdiction?: fhir.ICodeableConcept | undefined;
    /**
     * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.
     */
    status: fhir.ICodeableConcept | null;
    /**
     * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
     */
    dateRange: fhir.IPeriod | null;
    /**
     * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
     */
    restoreDate?: string | undefined;
    /**
     * Extended properties for primitive element: MarketingStatus.restoreDate
     */
    _restoreDate?: fhir.IFhirElement | undefined;
};
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare class MarketingStatus extends fhir.BackboneElement implements IMarketingStatus {
    /**
     * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.
     */
    country: fhir.CodeableConcept | null;
    /**
     * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.
     */
    status: fhir.CodeableConcept | null;
    /**
     * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
     */
    dateRange: fhir.Period | null;
    /**
     * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.
     */
    restoreDate?: string | undefined;
    /**
     * Extended properties for primitive element: MarketingStatus.restoreDate
     */
    _restoreDate?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MarketingStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMarketingStatus>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MarketingStatus.d.ts.map