import { Coding } from '../fhir.js';
/**
 * The status of the location.
 */
export declare const EncounterLocationStatusValueSet: {
    /**
     * active: The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed.
     */
    readonly Active: Coding;
    /**
     * completed: The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location.
     */
    readonly Completed: Coding;
    /**
     * planned: The patient is planned to be moved to this location at some point in the future.
     */
    readonly Planned: Coding;
    /**
     * reserved: This location is held empty for this patient.
     */
    readonly Reserved: Coding;
};
/**
 * The status of the location.
 */
export declare type EncounterLocationStatusValueSetType = typeof EncounterLocationStatusValueSet;
/**
 * The status of the location.
 */
export declare enum EncounterLocationStatusValueSetEnum {
    /**
     * active: The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed.
     */
    Active = "active",
    /**
     * completed: The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location.
     */
    Completed = "completed",
    /**
     * planned: The patient is planned to be moved to this location at some point in the future.
     */
    Planned = "planned",
    /**
     * reserved: This location is held empty for this patient.
     */
    Reserved = "reserved"
}
//# sourceMappingURL=EncounterLocationStatusValueSet.d.ts.map