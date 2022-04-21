import * as fhir from '../fhir.js';
/**
 * Authorization in areas within a country.
 */
export declare type IMedicinalProductAuthorizationJurisdictionalAuthorization = fhir.IBackboneElement & {
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Country of authorization.
     */
    country?: fhir.ICodeableConcept | undefined;
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
     * Identifier for this procedure.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.IPeriod | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.procedure.date[x]
     */
    _dateDateTime?: fhir.IFhirElement | undefined;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhir.IMedicinalProductAuthorizationProcedure[] | undefined;
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
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhir.ICodeableConcept[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.ICodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.statusDate
     */
    _statusDate?: fhir.IFhirElement | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.restoreDate
     */
    _restoreDate?: fhir.IFhirElement | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.IPeriod | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.IPeriod | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.dateOfFirstAuthorization
     */
    _dateOfFirstAuthorization?: fhir.IFhirElement | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.internationalBirthDate
     */
    _internationalBirthDate?: fhir.IFhirElement | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.ICodeableConcept | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhir.IMedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.IReference | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.IReference | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.IMedicinalProductAuthorizationProcedure | undefined;
};
/**
 * Authorization in areas within a country.
 */
export declare class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement implements IMedicinalProductAuthorizationJurisdictionalAuthorization {
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Country of authorization.
     */
    country?: fhir.CodeableConcept | undefined;
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
    constructor(source?: Partial<IMedicinalProductAuthorizationJurisdictionalAuthorization>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export declare class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement implements IMedicinalProductAuthorizationProcedure {
    /**
     * Identifier for this procedure.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Date of procedure.
     */
    datePeriod?: fhir.Period | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.procedure.date[x]
     */
    _dateDateTime?: fhir.FhirElement | undefined;
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhir.MedicinalProductAuthorizationProcedure[] | undefined;
    /**
     * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductAuthorizationProcedure>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The regulatory authorization of a medicinal product.
 */
export declare class MedicinalProductAuthorization extends fhir.DomainResource implements IMedicinalProductAuthorization {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductAuthorization";
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhir.CodeableConcept[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.statusDate
     */
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.restoreDate
     */
    _restoreDate?: fhir.FhirElement | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhir.Period | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhir.Period | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.dateOfFirstAuthorization
     */
    _dateOfFirstAuthorization?: fhir.FhirElement | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductAuthorization.internationalBirthDate
     */
    _internationalBirthDate?: fhir.FhirElement | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhir.CodeableConcept | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhir.Reference | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhir.Reference | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhir.MedicinalProductAuthorizationProcedure | undefined;
    /**
     * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedicinalProductAuthorization>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map