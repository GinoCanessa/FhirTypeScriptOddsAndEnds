import { Coding } from '../fhir';
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
export declare const LocationPhysicalTypeValueSet: {
    /**
     * A defined physical boundary of something, such as a flood risk zone, region, postcode
     */
    location_physical_type_Area: Coding;
    /**
     * A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
     */
    location_physical_type_Bed: Coding;
    /**
     * Any Building or structure. This may contain rooms, corridors, wings, etc. It might not have walls, or a roof, but is considered a defined/allocated space.
     */
    location_physical_type_Building: Coding;
    /**
     * A container that can store goods, equipment, medications or other items.
     */
    location_physical_type_Cabinet: Coding;
    /**
     * Any corridor within a Building, that may connect rooms.
     */
    location_physical_type_Corridor: Coding;
    /**
     * A residential dwelling. Usually used to reference a location that a person/patient may reside.
     */
    location_physical_type_House: Coding;
    /**
     * A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundary
     */
    location_physical_type_Jurisdiction: Coding;
    /**
     * A Level in a multi-level Building/Structure.
     */
    location_physical_type_Level: Coding;
    /**
     * A defined path to travel between 2 points that has a known name.
     */
    location_physical_type_Road: Coding;
    /**
     * A space that is allocated as a room, it may have walls/roof etc., but does not require these.
     */
    location_physical_type_Room: Coding;
    /**
     * A collection of buildings or other locations such as a site or a campus.
     */
    location_physical_type_Site: Coding;
    /**
     * A means of transportation.
     */
    location_physical_type_Vehicle: Coding;
    /**
     * A Ward is a section of a medical facility that may contain rooms and other types of location.
     */
    location_physical_type_Ward: Coding;
    /**
     * A Wing within a Building, this often contains levels, rooms and corridors.
     */
    location_physical_type_Wing: Coding;
};
//# sourceMappingURL=LocationPhysicalTypeValueSet.d.ts.map