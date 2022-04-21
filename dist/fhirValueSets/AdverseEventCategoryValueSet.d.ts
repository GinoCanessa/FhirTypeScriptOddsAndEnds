import { Coding } from '../fhir.js';
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare const AdverseEventCategoryValueSet: {
    /**
     * expired-drug: The adverse event pertains to an expired drug.
     */
    readonly ExpiredDrug: Coding;
    /**
     * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
     */
    readonly IncorrectPrescribingInformation: Coding;
    /**
     * medical-device-use-error: The adverse event pertains to a medical device use error.
     */
    readonly MedicalDeviceUseError: Coding;
    /**
     * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
     */
    readonly ProblemWithDifferentManufacturerOfSameMedicine: Coding;
    /**
     * product-problem: The adverse event pertains to a product problem.
     */
    readonly ProductProblem: Coding;
    /**
     * product-quality: The adverse event pertains to product quality.
     */
    readonly ProductQuality: Coding;
    /**
     * product-use-error: The adverse event pertains to a product use error.
     */
    readonly ProductUseError: Coding;
    /**
     * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
     */
    readonly UnsafePhysicalEnvironment: Coding;
    /**
     * wrong-dose: The adverse event pertains to a wrong dose.
     */
    readonly WrongDose: Coding;
    /**
     * wrong-duration: The adverse event pertains to a wrong duration.
     */
    readonly WrongDuration: Coding;
    /**
     * wrong-rate: The adverse event pertains to a wrong rate.
     */
    readonly WrongRate: Coding;
    /**
     * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
     */
    readonly WrongRouteOfAdministration: Coding;
    /**
     * wrong-technique: The adverse event pertains to a wrong technique.
     */
    readonly WrongTechnique: Coding;
    /**
     * wrong-time: The adverse event pertains to a wrong time.
     */
    readonly WrongTime: Coding;
};
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare type AdverseEventCategoryValueSetType = typeof AdverseEventCategoryValueSet;
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export declare enum AdverseEventCategoryValueSetEnum {
    /**
     * expired-drug: The adverse event pertains to an expired drug.
     */
    ExpiredDrug = "expired-drug",
    /**
     * incorrect-prescribing-information: The adverse event pertains to incorrect perscribing information.
     */
    IncorrectPrescribingInformation = "incorrect-prescribing-information",
    /**
     * medical-device-use-error: The adverse event pertains to a medical device use error.
     */
    MedicalDeviceUseError = "medical-device-use-error",
    /**
     * problem-different-manufacturer: The adverse event pertains to a problem with a different manufacturer of the same medication.
     */
    ProblemWithDifferentManufacturerOfSameMedicine = "problem-different-manufacturer",
    /**
     * product-problem: The adverse event pertains to a product problem.
     */
    ProductProblem = "product-problem",
    /**
     * product-quality: The adverse event pertains to product quality.
     */
    ProductQuality = "product-quality",
    /**
     * product-use-error: The adverse event pertains to a product use error.
     */
    ProductUseError = "product-use-error",
    /**
     * unsafe-physical-environment: The adverse event pertains to an unsafe physical environment.
     */
    UnsafePhysicalEnvironment = "unsafe-physical-environment",
    /**
     * wrong-dose: The adverse event pertains to a wrong dose.
     */
    WrongDose = "wrong-dose",
    /**
     * wrong-duration: The adverse event pertains to a wrong duration.
     */
    WrongDuration = "wrong-duration",
    /**
     * wrong-rate: The adverse event pertains to a wrong rate.
     */
    WrongRate = "wrong-rate",
    /**
     * wrong-route-of-administration: The adverse event pertains to a wrong route of administration.
     */
    WrongRouteOfAdministration = "wrong-route-of-administration",
    /**
     * wrong-technique: The adverse event pertains to a wrong technique.
     */
    WrongTechnique = "wrong-technique",
    /**
     * wrong-time: The adverse event pertains to a wrong time.
     */
    WrongTime = "wrong-time"
}
//# sourceMappingURL=AdverseEventCategoryValueSet.d.ts.map