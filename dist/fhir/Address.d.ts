import * as fhir from '../fhir.js';
import { AddressUseValueSetType, AddressUseValueSetEnum } from '../fhirValueSets/AddressUseValueSet.js';
import { AddressTypeValueSetType, AddressTypeValueSetEnum } from '../fhirValueSets/AddressTypeValueSet.js';
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export declare type IAddress = fhir.IFhirElement & {
    /**
     * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: AddressUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
     */
    type?: AddressTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.IFhirElement | undefined;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: string[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: fhir.IFhirElement[] | undefined;
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.IFhirElement | undefined;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.IFhirElement | undefined;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: string | undefined;
    /**
     * Extended properties for primitive element: Address.state
     */
    _state?: fhir.IFhirElement | undefined;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string | undefined;
    /**
     * Extended properties for primitive element: Address.postalCode
     */
    _postalCode?: fhir.IFhirElement | undefined;
    /**
     * ISO 3166 3 letter codes can be used in place of a human readable country name.
     */
    country?: string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.IFhirElement | undefined;
    /**
     * Time period when address was/is in use.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export declare class Address extends fhir.FhirElement implements IAddress {
    /**
     * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
     */
    use?: AddressUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Address.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
     */
    type?: AddressTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Address.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Address.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: string[] | undefined;
    /**
     * Extended properties for primitive element: Address.line
     */
    _line?: fhir.FhirElement[] | undefined;
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: string | undefined;
    /**
     * Extended properties for primitive element: Address.city
     */
    _city?: fhir.FhirElement | undefined;
    /**
     * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
     */
    district?: string | undefined;
    /**
     * Extended properties for primitive element: Address.district
     */
    _district?: fhir.FhirElement | undefined;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: string | undefined;
    /**
     * Extended properties for primitive element: Address.state
     */
    _state?: fhir.FhirElement | undefined;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string | undefined;
    /**
     * Extended properties for primitive element: Address.postalCode
     */
    _postalCode?: fhir.FhirElement | undefined;
    /**
     * ISO 3166 3 letter codes can be used in place of a human readable country name.
     */
    country?: string | undefined;
    /**
     * Extended properties for primitive element: Address.country
     */
    _country?: fhir.FhirElement | undefined;
    /**
     * Time period when address was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for Address - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAddress>);
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): AddressUseValueSetType;
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): AddressTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Address.d.ts.map