import * as fhirInterfaces from '../strictinterfaces';
/**
 * Authorization in areas within a country.
 */
export interface IMedicinalProductAuthorizationJurisdictionalAuthorization extends fhirInterfaces.IBackboneElement {
    /**
     * Country of authorization.
     */
    country?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhirInterfaces.IPeriod | undefined;
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export interface IMedicinalProductAuthorizationProcedure extends fhirInterfaces.IBackboneElement {
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhirInterfaces.IMedicinalProductAuthorizationProcedure[] | undefined;
    /**
     * Date of procedure.
     */
    datePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    _dateDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier for this procedure.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhirInterfaces.ICodeableConcept;
}
/**
 * The regulatory authorization of a medicinal product.
 */
export interface IMedicinalProductAuthorization extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicinalProductAuthorization";
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    _dateOfFirstAuthorization?: fhirInterfaces.IElement | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhirInterfaces.IReference | undefined;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    _internationalBirthDate?: fhirInterfaces.IElement | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhirInterfaces.IMedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhirInterfaces.IMedicinalProductAuthorizationProcedure | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhirInterfaces.IReference | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    _restoreDate?: fhirInterfaces.IElement | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirInterfaces.IElement | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhirInterfaces.IPeriod | undefined;
}
//# sourceMappingURL=IMedicinalProductAuthorization.d.ts.map