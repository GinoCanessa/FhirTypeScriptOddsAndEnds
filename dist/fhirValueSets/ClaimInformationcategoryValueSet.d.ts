import { Coding } from '../fhir.js';
/**
 * This value set includes sample Information Category codes.
 */
export declare const ClaimInformationcategoryValueSet: {
    /**
     * attachment: Materials attached such as images, documents and resources.
     */
    readonly Attachment: Coding;
    /**
     * discharge: Discharge status and discharge to locations.
     */
    readonly Discharge: Coding;
    /**
     * employmentimpacted: An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
     */
    readonly EmploymentImpacted: Coding;
    /**
     * exception: Insurance policy exceptions.
     */
    readonly Exception: Coding;
    /**
     * externalcause: The external cause of an illness or injury.
     */
    readonly ExternalCaause: Coding;
    /**
     * hospitalized: An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
     */
    readonly Hospitalized: Coding;
    /**
     * info: Codes conveying additional situation and condition information.
     */
    readonly Information: Coding;
    /**
     * material: Materials being forwarded, e.g. Models, molds, images, documents.
     */
    readonly MaterialsForwarded: Coding;
    /**
     * missingtooth: Teeth which are missing for any reason, for example: prior extraction, never developed.
     */
    readonly MissingTooth: Coding;
    /**
     * onset: Period, start or end dates of aspects of the Condition.
     */
    readonly Onset: Coding;
    /**
     * other: Other information identified by the type.system.
     */
    readonly Other: Coding;
    /**
     * patientreasonforvisit: The reason for the patient visit.
     */
    readonly PatientReasonForVisit: Coding;
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    readonly Prosthesis: Coding;
    /**
     * related: Nature and date of the related event e.g. Last exam, service, X-ray etc.
     */
    readonly RelatedServices: Coding;
};
/**
 * This value set includes sample Information Category codes.
 */
export declare type ClaimInformationcategoryValueSetType = typeof ClaimInformationcategoryValueSet;
/**
 * This value set includes sample Information Category codes.
 */
export declare enum ClaimInformationcategoryValueSetEnum {
    /**
     * attachment: Materials attached such as images, documents and resources.
     */
    Attachment = "attachment",
    /**
     * discharge: Discharge status and discharge to locations.
     */
    Discharge = "discharge",
    /**
     * employmentimpacted: An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
     */
    EmploymentImpacted = "employmentimpacted",
    /**
     * exception: Insurance policy exceptions.
     */
    Exception = "exception",
    /**
     * externalcause: The external cause of an illness or injury.
     */
    ExternalCaause = "externalcause",
    /**
     * hospitalized: An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
     */
    Hospitalized = "hospitalized",
    /**
     * info: Codes conveying additional situation and condition information.
     */
    Information = "info",
    /**
     * material: Materials being forwarded, e.g. Models, molds, images, documents.
     */
    MaterialsForwarded = "material",
    /**
     * missingtooth: Teeth which are missing for any reason, for example: prior extraction, never developed.
     */
    MissingTooth = "missingtooth",
    /**
     * onset: Period, start or end dates of aspects of the Condition.
     */
    Onset = "onset",
    /**
     * other: Other information identified by the type.system.
     */
    Other = "other",
    /**
     * patientreasonforvisit: The reason for the patient visit.
     */
    PatientReasonForVisit = "patientreasonforvisit",
    /**
     * prosthesis: The type of prosthesis and date of supply if a previously supplied prosthesis.
     */
    Prosthesis = "prosthesis",
    /**
     * related: Nature and date of the related event e.g. Last exam, service, X-ray etc.
     */
    RelatedServices = "related"
}
//# sourceMappingURL=ClaimInformationcategoryValueSet.d.ts.map