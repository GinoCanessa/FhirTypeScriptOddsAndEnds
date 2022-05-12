/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export declare enum V3ParticipationModeValueSetEnum {
    /**
     * DICTATE: Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    Dictated = "DICTATE",
    /**
     * ELECTRONIC: Participation by non-human-languaged based electronic signal
     */
    ElectronicData = "ELECTRONIC",
    /**
     * EMAILWRIT: Participation by text or diagrams transmitted over an electronic mail system.
     */
    Email = "EMAILWRIT",
    /**
     * FACE: Participation by voice communication where parties speak to each other directly.
     */
    FaceToFace = "FACE",
    /**
     * FAXWRIT: Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    Telefax = "FAXWRIT",
    /**
     * HANDWRIT: Participation by text or diagrams printed on paper or other recording medium
     */
    Handwritten = "HANDWRIT",
    /**
     * MAILWRIT: Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    Mail = "MAILWRIT",
    /**
     * ONLINEWRIT: Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    OnlineWritten = "ONLINEWRIT",
    /**
     * PHONE: Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    Telephone = "PHONE",
    /**
     * PHYSICAL: Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    PhysicalPresence = "PHYSICAL",
    /**
     * REMOTE: Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    RemotePresence = "REMOTE",
    /**
     * TYPEWRIT: Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    Typewritten = "TYPEWRIT",
    /**
     * VERBAL: Participation by voice communication
     */
    Verbal = "VERBAL",
    /**
     * VIDEOCONF: Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    Videoconferencing = "VIDEOCONF",
    /**
     * WRITTEN: Participation by human language recorded on a physical material
     */
    Written = "WRITTEN"
}
//# sourceMappingURL=V3ParticipationModeValueSetEnum.d.ts.map