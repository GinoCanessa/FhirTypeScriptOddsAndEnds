import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Authorization in areas within a country.
 */
export declare class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductAuthorizationJurisdictionalAuthorization {
    /**
     * Country of authorization.
     */
    country?: fhirModels.CodeableConcept | undefined;
    /**
     * The assigned number for the marketing authorization.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The legal status of supply in a jurisdiction or region.
     */
    legalStatusOfSupply?: fhirModels.CodeableConcept | undefined;
    /**
     * The start and expected end date of the authorization.
     */
    validityPeriod?: fhirModels.Period | undefined;
    /**
     * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductAuthorizationJurisdictionalAuthorization);
}
/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export declare class MedicinalProductAuthorizationProcedure extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductAuthorizationProcedure {
    /**
     * Applcations submitted to obtain a marketing authorization.
     */
    application?: fhirModels.MedicinalProductAuthorizationProcedure[] | undefined;
    /**
     * Date of procedure.
     */
    datePeriod?: fhirModels.Period | undefined;
    /**
     * Date of procedure.
     */
    dateDateTime?: string | undefined;
    _dateDateTime?: fhirModels.Element | undefined;
    /**
     * Identifier for this procedure.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Type of procedure.
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for MedicinalProductAuthorizationProcedure from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductAuthorizationProcedure);
}
/**
 * The regulatory authorization of a medicinal product.
 */
export declare class MedicinalProductAuthorization extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductAuthorization {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MedicinalProductAuthorization";
    /**
     * The country in which the marketing authorization has been granted.
     */
    country?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A period of time after authorization before generic product applicatiosn can be submitted.
     */
    dataExclusivityPeriod?: fhirModels.Period | undefined;
    /**
     * The date when the first authorization was granted by a Medicines Regulatory Agency.
     */
    dateOfFirstAuthorization?: string | undefined;
    _dateOfFirstAuthorization?: fhirModels.Element | undefined;
    /**
     * Marketing Authorization Holder.
     */
    holder?: fhirModels.Reference | undefined;
    /**
     * Business identifier for the marketing authorization, as assigned by a regulator.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Date of first marketing authorization for a company's new medicinal product in any country in the World.
     */
    internationalBirthDate?: string | undefined;
    _internationalBirthDate?: fhirModels.Element | undefined;
    /**
     * Jurisdiction within a country.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Authorization in areas within a country.
     */
    jurisdictionalAuthorization?: fhirModels.MedicinalProductAuthorizationJurisdictionalAuthorization[] | undefined;
    /**
     * The legal framework against which this authorization is granted.
     */
    legalBasis?: fhirModels.CodeableConcept | undefined;
    /**
     * The regulatory procedure for granting or amending a marketing authorization.
     */
    procedure?: fhirModels.MedicinalProductAuthorizationProcedure | undefined;
    /**
     * Medicines Regulatory Agency.
     */
    regulator?: fhirModels.Reference | undefined;
    /**
     * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
     */
    restoreDate?: string | undefined;
    _restoreDate?: fhirModels.Element | undefined;
    /**
     * The status of the marketing authorization.
     */
    status?: fhirModels.CodeableConcept | undefined;
    /**
     * The date at which the given status has become applicable.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirModels.Element | undefined;
    /**
     * The medicinal product that is being authorized.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
     */
    validityPeriod?: fhirModels.Period | undefined;
    /**
     * Default constructor for MedicinalProductAuthorization from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedicinalProductAuthorization);
}
//# sourceMappingURL=MedicinalProductAuthorization.d.ts.map