import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export interface IContributor extends fhirInterfaces.IElement {
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The type of contributor.
     */
    type?: ContributorTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IContributor.d.ts.map