import { Coding } from '../strictmodels';
/**
 * The status of the location.
 */
export declare const EncounterLocationStatus: {
    /**
     * The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed.
     */
    encounter_location_status_Active: Coding;
    /**
     * The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location.
     */
    encounter_location_status_Completed: Coding;
    /**
     * The patient is planned to be moved to this location at some point in the future.
     */
    encounter_location_status_Planned: Coding;
    /**
     * This location is held empty for this patient.
     */
    encounter_location_status_Reserved: Coding;
};
//# sourceMappingURL=EncounterLocationStatus.d.ts.map