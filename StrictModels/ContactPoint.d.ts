import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare class ContactPoint extends fhirModels.Element implements fhirInterfaces.IContactPoint {
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    _rank?: fhirModels.Element | undefined;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemEnum | undefined;
    _system?: fhirModels.Element | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ContactPoint from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IContactPoint);
}
/**
 * Code Values for the ContactPoint.system field
 */
export declare enum ContactPointSystemEnum {
    PHONE = "phone",
    FAX = "fax",
    EMAIL = "email",
    PAGER = "pager",
    URL = "url",
    SMS = "sms",
    OTHER = "other"
}
/**
 * Code Values for the ContactPoint.use field
 */
export declare enum ContactPointUseEnum {
    HOME = "home",
    WORK = "work",
    TEMP = "temp",
    OLD = "old",
    MOBILE = "mobile"
}
//# sourceMappingURL=ContactPoint.d.ts.map