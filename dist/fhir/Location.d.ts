import * as fhir from '../fhir.js';
import { DaysOfWeekValueSetType, DaysOfWeekValueSetEnum } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { LocationStatusValueSetType, LocationStatusValueSetEnum } from '../fhirValueSets/LocationStatusValueSet.js';
import { V20116ValueSetType } from '../fhirValueSets/V20116ValueSet.js';
import { LocationModeValueSetType, LocationModeValueSetEnum } from '../fhirValueSets/LocationModeValueSet.js';
import { V3ServiceDeliveryLocationRoleTypeValueSetType } from '../fhirValueSets/V3ServiceDeliveryLocationRoleTypeValueSet.js';
import { LocationPhysicalTypeValueSetType } from '../fhirValueSets/LocationPhysicalTypeValueSet.js';
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare type ILocationPosition = fhir.IBackboneElement & {
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.longitude
     */
    _longitude?: fhir.IFhirElement | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.latitude
     */
    _latitude?: fhir.IFhirElement | undefined;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    /**
     * Extended properties for primitive element: Location.position.altitude
     */
    _altitude?: fhir.IFhirElement | undefined;
};
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare type ILocationHoursOfOperation = fhir.IBackboneElement & {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.daysOfWeek
     */
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.allDay
     */
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.openingTime
     */
    _openingTime?: fhir.IFhirElement | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.closingTime
     */
    _closingTime?: fhir.IFhirElement | undefined;
};
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export declare type ILocation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Location";
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: LocationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.ICoding | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: Location.alias
     */
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: LocationModeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Location.mode
     */
    _mode?: fhir.IFhirElement | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.IAddress | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.ICodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.ILocationPosition | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.IReference | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhir.ILocationHoursOfOperation[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: Location.availabilityExceptions
     */
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.IReference[] | undefined;
};
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare class LocationPosition extends fhir.BackboneElement implements ILocationPosition {
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.longitude
     */
    _longitude?: fhir.FhirElement | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: number | null;
    /**
     * Extended properties for primitive element: Location.position.latitude
     */
    _latitude?: fhir.FhirElement | undefined;
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    /**
     * Extended properties for primitive element: Location.position.altitude
     */
    _altitude?: fhir.FhirElement | undefined;
    /**
     * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ILocationPosition>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare class LocationHoursOfOperation extends fhir.BackboneElement implements ILocationHoursOfOperation {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.daysOfWeek
     */
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.allDay
     */
    _allDay?: fhir.FhirElement | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.openingTime
     */
    _openingTime?: fhir.FhirElement | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    /**
     * Extended properties for primitive element: Location.hoursOfOperation.closingTime
     */
    _closingTime?: fhir.FhirElement | undefined;
    /**
     * Default constructor for LocationHoursOfOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ILocationHoursOfOperation>);
    /**
     * Required-bound Value Set for daysOfWeek
     */
    static daysOfWeekRequiredValueSet(): DaysOfWeekValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export declare class Location extends fhir.DomainResource implements ILocation {
    /**
     * Resource Type Name
     */
    resourceType: "Location";
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: LocationStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Location.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.Coding | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Location.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: Location.alias
     */
    _alias?: fhir.FhirElement[] | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Location.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: LocationModeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Location.mode
     */
    _mode?: fhir.FhirElement | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.Address | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPosition | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhir.LocationHoursOfOperation[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: Location.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Default constructor for Location - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ILocation>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): LocationStatusValueSetType;
    /**
     * Preferred-bound Value Set for operationalStatus
     */
    static operationalStatusPreferredValueSet(): V20116ValueSetType;
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): LocationModeValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): V3ServiceDeliveryLocationRoleTypeValueSetType;
    /**
     * Example-bound Value Set for physicalType
     */
    static physicalTypeExampleValueSet(): LocationPhysicalTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Location.d.ts.map