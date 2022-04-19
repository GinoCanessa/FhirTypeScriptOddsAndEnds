import * as fhir from '../fhir';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare type IContributor = fhir.IFhirElement & {
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of contributor.
     */
    type: ContributorTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare class Contributor extends fhir.FhirElement implements fhir.IContributor {
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of contributor.
     */
    type: ContributorTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IContributor>);
    /**
     * Check if the current Contributor contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Contributor from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IContributor): Contributor;
}
/**
 * Code Values for the Contributor.type field
 */
export declare enum ContributorTypeEnum {
    AUTHOR = "author",
    EDITOR = "editor",
    REVIEWER = "reviewer",
    ENDORSER = "endorser"
}
//# sourceMappingURL=Contributor.d.ts.map