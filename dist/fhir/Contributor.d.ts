import * as fhir from '../fhir.js';
import { ContributorTypeValueSetType, ContributorTypeValueSetEnum } from '../fhirValueSets/ContributorTypeValueSet.js';
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare type IContributor = fhir.IFhirElement & {
    /**
     * The type of contributor.
     */
    type: ContributorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Contributor.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Contributor.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.IContactDetail[] | undefined;
};
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare class Contributor extends fhir.FhirElement implements IContributor {
    /**
     * The type of contributor.
     */
    type: ContributorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Contributor.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Contributor.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IContributor>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): ContributorTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Contributor.d.ts.map