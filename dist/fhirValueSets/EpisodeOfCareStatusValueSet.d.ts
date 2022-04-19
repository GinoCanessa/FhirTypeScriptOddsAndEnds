import { Coding } from '../fhir';
/**
 * The status of the episode of care.
 */
export declare const EpisodeOfCareStatusValueSet: {
    /**
     * This episode of care is current.
     */
    episode_of_care_status_Active: Coding;
    /**
     * The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
     */
    episode_of_care_status_Cancelled: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    episode_of_care_status_EnteredInError: Coding;
    /**
     * This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.
     */
    episode_of_care_status_Finished: Coding;
    /**
     * This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).
     */
    episode_of_care_status_OnHold: Coding;
    /**
     * This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.
     */
    episode_of_care_status_Planned: Coding;
    /**
     * This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
     */
    episode_of_care_status_Waitlist: Coding;
};
//# sourceMappingURL=EpisodeOfCareStatusValueSet.d.ts.map