/**
 *  A set of codes specifying the modality by which the Entity playing the Role is participating in the Act.  Examples:
 * Physically present, over the telephone, written communication.  Rationale:
 * Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically.  Open Issue:
 * There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.
 */
export var V3ParticipationMode = {
    /**
     * Participation by pre-recorded voice.  Communication is limited to one direction (from the recorder to recipient).
     */
    v3_ParticipationMode_Dictated: {
        code: "DICTATE",
        display: "dictated",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by non-human-languaged based electronic signal
     */
    v3_ParticipationMode_ElectronicData: {
        code: "ELECTRONIC",
        display: "electronic data",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams transmitted over an electronic mail system.
     */
    v3_ParticipationMode_Email: {
        code: "EMAILWRIT",
        display: "email",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by voice communication where parties speak to each other directly.
     */
    v3_ParticipationMode_FaceToFace: {
        code: "FACE",
        display: "face-to-face",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams printed on paper that have been transmitted over a fax device
     */
    v3_ParticipationMode_Telefax: {
        code: "FAXWRIT",
        display: "telefax",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams printed on paper or other recording medium
     */
    v3_ParticipationMode_Handwritten: {
        code: "HANDWRIT",
        display: "handwritten",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams printed on paper transmitted physically (e.g. by courier service, postal service).
     */
    v3_ParticipationMode_Mail: {
        code: "MAILWRIT",
        display: "mail",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams submitted by computer network, e.g. online survey.
     */
    v3_ParticipationMode_OnlineWritten: {
        code: "ONLINEWRIT",
        display: "online written",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by voice communication where the voices of the communicating parties are transported over an electronic medium
     */
    v3_ParticipationMode_Telephone: {
        code: "PHONE",
        display: "telephone",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by direct action where subject and actor are in the same location. (The participation involves more than communication.)
     */
    v3_ParticipationMode_PhysicalPresence: {
        code: "PHYSICAL",
        display: "physical presence",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by direct action where subject and actor are in separate locations, and the actions of the actor are transmitted by electronic or mechanical means. (The participation involves more than communication.)
     */
    v3_ParticipationMode_RemotePresence: {
        code: "REMOTE",
        display: "remote presence",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by text or diagrams printed on paper or other recording medium where the recording was performed using a typewriter, typesetter, computer or similar mechanism.
     */
    v3_ParticipationMode_Typewritten: {
        code: "TYPEWRIT",
        display: "typewritten",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by voice communication
     */
    v3_ParticipationMode_Verbal: {
        code: "VERBAL",
        display: "verbal",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by voice and visual communication where the voices and images of the communicating parties are transported over an electronic medium
     */
    v3_ParticipationMode_Videoconferencing: {
        code: "VIDEOCONF",
        display: "videoconferencing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    },
    /**
     * Participation by human language recorded on a physical material
     */
    v3_ParticipationMode_Written: {
        code: "WRITTEN",
        display: "written",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode"
    }
};
