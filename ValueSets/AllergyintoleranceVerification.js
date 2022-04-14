"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyintoleranceVerification = void 0;
/**
 * Preferred value set for AllergyIntolerance Verification Status.
 */
exports.AllergyintoleranceVerification = {
    /**
     * A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    allergyintolerance_verification_Confirmed: {
        code: "confirmed",
        display: "Confirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
    },
    /**
     * The statement was entered in error and is not valid.
     */
    allergyintolerance_verification_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
    },
    /**
     * A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.
     */
    allergyintolerance_verification_Refuted: {
        code: "refuted",
        display: "Refuted",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
    },
    /**
     * A low level of certainty about the propensity for a reaction to the identified substance.
     */
    allergyintolerance_verification_Unconfirmed: {
        code: "unconfirmed",
        display: "Unconfirmed",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification"
    },
};
//# sourceMappingURL=AllergyintoleranceVerification.js.map