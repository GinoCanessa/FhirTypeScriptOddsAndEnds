import * as fhir from '../fhir';
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare type ILocationPosition = fhir.IBackboneElement & {
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    _altitude?: fhir.IFhirElement | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: number | null;
    _latitude?: fhir.IFhirElement | undefined;
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: number | null;
    _longitude?: fhir.IFhirElement | undefined;
};
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare type ILocationHoursOfOperation = fhir.IBackboneElement & {
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    _closingTime?: fhir.IFhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: LocationHoursOfOperationDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    _openingTime?: fhir.IFhirElement | undefined;
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
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.IAddress | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: string[] | undefined;
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhir.ILocationHoursOfOperation[] | undefined;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: LocationModeEnum | undefined;
    _mode?: fhir.IFhirElement | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.ICoding | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.IReference | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.ICodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.ILocationPosition | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: LocationStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare class LocationPosition extends fhir.BackboneElement implements fhir.ILocationPosition {
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    _altitude?: fhir.FhirElement | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude: number | null;
    _latitude?: fhir.FhirElement | undefined;
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude: number | null;
    _longitude?: fhir.FhirElement | undefined;
    /**
     * Default constructor for LocationPosition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ILocationPosition>);
    /**
     * Check if the current LocationPosition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a LocationPosition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ILocationPosition): LocationPosition;
}
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare class LocationHoursOfOperation extends fhir.BackboneElement implements fhir.ILocationHoursOfOperation {
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.FhirElement | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    _closingTime?: fhir.FhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: LocationHoursOfOperationDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    _openingTime?: fhir.FhirElement | undefined;
    /**
     * Default constructor for LocationHoursOfOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ILocationHoursOfOperation>);
    /**
     * Check if the current LocationHoursOfOperation contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a LocationHoursOfOperation from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ILocationHoursOfOperation): LocationHoursOfOperation;
}
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export declare class Location extends fhir.DomainResource implements fhir.ILocation {
    /**
     * Resource Type Name
     */
    resourceType: "Location";
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhir.Address | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: string[] | undefined;
    _alias?: fhir.FhirElement[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhir.LocationHoursOfOperation[] | undefined;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: LocationModeEnum | undefined;
    _mode?: fhir.FhirElement | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhir.Coding | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhir.LocationPosition | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: LocationStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for Location - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ILocation>);
    /**
     * Check if the current Location contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Location from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ILocation): Location;
}
/**
 * Code Values for the Location.hoursOfOperation.daysOfWeek field
 */
export declare enum LocationHoursOfOperationDaysOfWeekEnum {
    MON = "mon",
    TUE = "tue",
    WED = "wed",
    THU = "thu",
    FRI = "fri",
    SAT = "sat",
    SUN = "sun"
}
/**
 * Code Values for the Location.mode field
 */
export declare enum LocationModeEnum {
    INSTANCE = "instance",
    KIND = "kind"
}
/**
 * Code Values for the Location.status field
 */
export declare enum LocationStatusEnum {
    ACTIVE = "active",
    SUSPENDED = "suspended",
    INACTIVE = "inactive"
}
//# sourceMappingURL=Location.d.ts.map