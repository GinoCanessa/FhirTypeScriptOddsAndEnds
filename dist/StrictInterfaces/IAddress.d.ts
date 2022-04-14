import * as fhirInterfaces from '../strictinterfaces';
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export interface IAddress extends fhirInterfaces.IElement {
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: string | undefined;
    _city?: fhirInterfaces.IElement | undefined;
    /**
     * ISO 3166 3 letter codes can be used in place of a human readable country name.
     */
    country?: string | undefined;
    _country?: fhirInterfaces.IElement | undefined;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: string | undefined;
    _district?: fhirInterfaces.IElement | undefined;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: string[] | undefined;
    _line?: fhirInterfaces.IElement[] | undefined;
    /**
     * Time period when address was/is in use.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string | undefined;
    _postalCode?: fhirInterfaces.IElement | undefined;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: string | undefined;
    _state?: fhirInterfaces.IElement | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
     */
    type?: AddressTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: AddressUseEnum | undefined;
    _use?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Address.type field
 */
export declare enum AddressTypeEnum {
    POSTAL = "postal",
    PHYSICAL = "physical",
    BOTH = "both"
}
/**
 * Code Values for the Address.use field
 */
export declare enum AddressUseEnum {
    HOME = "home",
    WORK = "work",
    TEMP = "temp",
    OLD = "old",
    BILLING = "billing"
}
//# sourceMappingURL=IAddress.d.ts.map