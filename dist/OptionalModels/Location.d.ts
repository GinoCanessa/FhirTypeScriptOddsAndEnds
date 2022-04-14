import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export declare class LocationPosition extends fhirModels.BackboneElement implements fhirInterfaces.ILocationPosition {
    /**
     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */
    altitude?: number | undefined;
    _altitude?: fhirModels.Element | undefined;
    /**
     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */
    latitude?: number | undefined;
    _latitude?: fhirModels.Element | undefined;
    /**
     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */
    longitude?: number | undefined;
    _longitude?: fhirModels.Element | undefined;
    /**
     * Default constructor for LocationPosition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILocationPosition>);
    /**
     * Factory function to create a LocationPosition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILocationPosition): LocationPosition;
    /**
     * Check if the current LocationPosition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
 * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
 */
export declare class LocationHoursOfOperation extends fhirModels.BackboneElement implements fhirInterfaces.ILocationHoursOfOperation {
    /**
     * The Location is open all day.
     */
    allDay?: boolean | undefined;
    _allDay?: fhirModels.Element | undefined;
    /**
     * Time that the Location closes.
     */
    closingTime?: string | undefined;
    _closingTime?: fhirModels.Element | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: LocationHoursOfOperationDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhirModels.Element[] | undefined;
    /**
     * Time that the Location opens.
     */
    openingTime?: string | undefined;
    _openingTime?: fhirModels.Element | undefined;
    /**
     * Default constructor for LocationHoursOfOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILocationHoursOfOperation>);
    /**
     * Factory function to create a LocationHoursOfOperation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILocationHoursOfOperation): LocationHoursOfOperation;
    /**
     * Check if the current LocationHoursOfOperation contains all required elements.
     */
    checkRequiredElements(): string[];
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
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export declare class Location extends fhirModels.DomainResource implements fhirInterfaces.ILocation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Location";
    /**
     * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
     */
    address?: fhirModels.Address | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
     */
    alias?: string[] | undefined;
    _alias?: fhirModels.Element[] | undefined;
    /**
     * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhirModels.Element | undefined;
    /**
     * Description of the Location, which helps in finding or referencing the place.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Technical endpoints providing access to services operated for the location.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
     * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
     */
    hoursOfOperation?: fhirModels.LocationHoursOfOperation[] | undefined;
    /**
     * Unique code or number identifying the location to its users.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
     */
    managingOrganization?: fhirModels.Reference | undefined;
    /**
     * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
     */
    mode?: LocationModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
     */
    operationalStatus?: fhirModels.Coding | undefined;
    /**
     * Another Location of which this Location is physically a part of.
     */
    partOf?: fhirModels.Reference | undefined;
    /**
     * Physical form of the location, e.g. building, room, vehicle, road.
     */
    physicalType?: fhirModels.CodeableConcept | undefined;
    /**
     * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
     */
    position?: fhirModels.LocationPosition | undefined;
    /**
     * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
     */
    status?: LocationStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Indicates the type of function performed at the location.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for Location from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ILocation>);
    /**
     * Factory function to create a Location from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ILocation): Location;
    /**
     * Check if the current Location contains all required elements.
     */
    checkRequiredElements(): string[];
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