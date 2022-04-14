import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare class Contributor extends fhirModels.Element implements fhirInterfaces.IContributor {
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * The type of contributor.
     */
    type: ContributorTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for Contributor from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IContributor);
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