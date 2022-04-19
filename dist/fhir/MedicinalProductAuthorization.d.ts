import * as fhir from '../fhir';
/**
 * Authorization in areas within a country.
 */
export declare type IMedicinalProductAuthorizationJurisdictionalAuthorization = fhir.IBackboneElement & {
    /**
     * Country of authorization.
     */
    country?: fhir.ICodeableConcept | undefined;
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhir.ICodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhir.IPeriod | undefined;
};
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export declare type IMedicinalProductAuthorizationProcedure = fhir.IBackboneElement & {
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhir.IMedicinalProductAuthorizationProcedure[] | undefined;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.IPeriod | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    _dateDateTime?: fhir.IFhirElement | undefined;
    /**
     * Identifier for this procedure.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * The regulatory authorization of a medicinal product.
 */
export declare type IMedicinalProductAuthorization = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization";
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhir.ICodeableConcept[] | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.IPeriod | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    _dateOfFirstAuthorization?: fhir.IFhirElement | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.IReference | undefined;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    _internationalBirthDate?: fhir.IFhirElement | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.ICodeableConcept | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.IMedicinalProductAuthorizationProcedure | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.IReference | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    _restoreDate?: fhir.IFhirElement | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.IFhirElement | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.IPeriod | undefined;
};
/**
 * Authorization in areas within a country.
 */
export declare class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement implements fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization {
    /**
     * Country of authorization.
     */
    country?: fhir.CodeableConcept | undefined;
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization>);
    /**
     * Check if the current MedicinalProductAuthorizationJurisdictionalAuthorization contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductAuthorizationJurisdictionalAuthorization from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization): MedicinalProductAuthorizationJurisdictionalAuthorization;
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export declare class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement implements fhir.IMedicinalProductAuthorizationProcedure {
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhir.MedicinalProductAuthorizationProcedure[] | undefined;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.Period | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    _dateDateTime?: fhir.FhirElement | undefined;
    /**
     * Identifier for this procedure.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductAuthorizationProcedure>);
    /**
     * Check if the current MedicinalProductAuthorizationProcedure contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductAuthorizationProcedure from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductAuthorizationProcedure): MedicinalProductAuthorizationProcedure;
}
/**
 * The regulatory authorization of a medicinal product.
 */
export declare class MedicinalProductAuthorization extends fhir.DomainResource implements fhir.IMedicinalProductAuthorization {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization";
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.Period | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    _dateOfFirstAuthorization?: fhir.FhirElement | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.Reference | undefined;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    _internationalBirthDate?: fhir.FhirElement | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.CodeableConcept | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.MedicinalProductAuthorizationProcedure | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    _restoreDate?: fhir.FhirElement | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedicinalProductAuthorization>);
    /**
     * Check if the current MedicinalProductAuthorization contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MedicinalProductAuthorization from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMedicinalProductAuthorization): MedicinalProductAuthorization;
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map