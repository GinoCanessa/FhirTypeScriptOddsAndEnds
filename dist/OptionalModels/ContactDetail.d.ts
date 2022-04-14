import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Specifies contact information for a person or organization.
 */
export declare class ContactDetail extends fhirModels.Element implements fhirInterfaces.IContactDetail {
    /**
     * If there is no named individual, the telecom information is for the organization as a whole.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for ContactDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IContactDetail>);
    /**
     * Factory function to create a ContactDetail from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IContactDetail): ContactDetail;
    /**
     * Check if the current ContactDetail contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=ContactDetail.d.ts.map