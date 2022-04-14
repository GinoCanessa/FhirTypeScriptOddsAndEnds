"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationPhysicalType = void 0;
/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 */
exports.LocationPhysicalType = {
    /**
     * A defined physical boundary of something, such as a flood risk zone, region, postcode
     */
    location_physical_type_Area: {
        code: "area",
        display: "Area",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A space that is allocated for sleeping/laying on. This is not the physical bed/trolley that may be moved about, but the space it may occupy.
     */
    location_physical_type_Bed: {
        code: "bd",
        display: "Bed",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * Any Building or structure. This may contain rooms, corridors, wings, etc. It might not have walls, or a roof, but is considered a defined/allocated space.
     */
    location_physical_type_Building: {
        code: "bu",
        display: "Building",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A container that can store goods, equipment, medications or other items.
     */
    location_physical_type_Cabinet: {
        code: "ca",
        display: "Cabinet",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * Any corridor within a Building, that may connect rooms.
     */
    location_physical_type_Corridor: {
        code: "co",
        display: "Corridor",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A residential dwelling. Usually used to reference a location that a person/patient may reside.
     */
    location_physical_type_House: {
        code: "ho",
        display: "House",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A wide scope that covers a conceptual domain, such as a Nation (Country wide community or Federal Government - e.g. Ministry of Health),  Province or State (community or Government), Business (throughout the enterprise), Nation with a business scope of an agency (e.g. CDC, FDA etc.) or a Business segment (UK Pharmacy), not just an physical boundary
     */
    location_physical_type_Jurisdiction: {
        code: "jdn",
        display: "Jurisdiction",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A Level in a multi-level Building/Structure.
     */
    location_physical_type_Level: {
        code: "lvl",
        display: "Level",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A defined path to travel between 2 points that has a known name.
     */
    location_physical_type_Road: {
        code: "rd",
        display: "Road",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A space that is allocated as a room, it may have walls/roof etc., but does not require these.
     */
    location_physical_type_Room: {
        code: "ro",
        display: "Room",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A collection of buildings or other locations such as a site or a campus.
     */
    location_physical_type_Site: {
        code: "si",
        display: "Site",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A means of transportation.
     */
    location_physical_type_Vehicle: {
        code: "ve",
        display: "Vehicle",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A Ward is a section of a medical facility that may contain rooms and other types of location.
     */
    location_physical_type_Ward: {
        code: "wa",
        display: "Ward",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
    /**
     * A Wing within a Building, this often contains levels, rooms and corridors.
     */
    location_physical_type_Wing: {
        code: "wi",
        display: "Wing",
        system: "http://terminology.hl7.org/CodeSystem/location-physical-type"
    },
};
//# sourceMappingURL=LocationPhysicalType.js.map