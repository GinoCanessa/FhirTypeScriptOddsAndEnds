import { Coding } from '../fhir.js';
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare const V3ActIncidentCodeValueSet: {
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    readonly MotorVehicleAccident: Coding;
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    readonly SchoolAccident: Coding;
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    readonly SportingAccident: Coding;
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    readonly WorkplaceAccident: Coding;
};
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare type V3ActIncidentCodeValueSetType = typeof V3ActIncidentCodeValueSet;
/**
 *  Set of codes indicating the type of incident or accident.
 */
export declare enum V3ActIncidentCodeValueSetEnum {
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    MotorVehicleAccident = "MVA",
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    SchoolAccident = "SCHOOL",
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    SportingAccident = "SPT",
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    WorkplaceAccident = "WPA"
}
//# sourceMappingURL=V3ActIncidentCodeValueSet.d.ts.map