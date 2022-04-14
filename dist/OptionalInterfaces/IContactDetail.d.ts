import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Specifies contact information for a person or organization.
 */
export interface IContactDetail extends fhirInterfaces.IElement {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
//# sourceMappingURL=IContactDetail.d.ts.map