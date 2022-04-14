import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface IContactPoint extends fhirInterfaces.IElement {
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    _rank?: fhirInterfaces.IElement | undefined;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemEnum | undefined;
    _system?: fhirInterfaces.IElement | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseEnum | undefined;
    _use?: fhirInterfaces.IElement | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    _value?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IContactPoint.d.ts.map