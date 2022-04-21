// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episodeofcare-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 */
export const EpisodeofcareTypeValueSet = {
    /**
     * Code: cacp
     */
    CommunityBasedAgedCare: new Coding({
        display: "Community-based aged care",
        code: "cacp",
        system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
    }),
    /**
     * Code: da
     */
    DrugAndAlcoholRehabilitation: new Coding({
        display: "Drug and alcohol rehabilitation",
        code: "da",
        system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
    }),
    /**
     * Code: diab
     */
    PostCoordinatedDiabetesProgram: new Coding({
        display: "Post coordinated diabetes program",
        code: "diab",
        system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
    }),
    /**
     * Code: hacc
     */
    HomeAndCommunityCare: new Coding({
        display: "Home and Community Care",
        code: "hacc",
        system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
    }),
    /**
     * Code: pac
     */
    PostAcuteCare: new Coding({
        display: "Post Acute Care",
        code: "pac",
        system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
    }),
};
/**
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 */
export var EpisodeofcareTypeValueSetEnum;
(function (EpisodeofcareTypeValueSetEnum) {
    /**
     * Code: cacp
     */
    EpisodeofcareTypeValueSetEnum["CommunityBasedAgedCare"] = "cacp";
    /**
     * Code: da
     */
    EpisodeofcareTypeValueSetEnum["DrugAndAlcoholRehabilitation"] = "da";
    /**
     * Code: diab
     */
    EpisodeofcareTypeValueSetEnum["PostCoordinatedDiabetesProgram"] = "diab";
    /**
     * Code: hacc
     */
    EpisodeofcareTypeValueSetEnum["HomeAndCommunityCare"] = "hacc";
    /**
     * Code: pac
     */
    EpisodeofcareTypeValueSetEnum["PostAcuteCare"] = "pac";
})(EpisodeofcareTypeValueSetEnum || (EpisodeofcareTypeValueSetEnum = {}));
//# sourceMappingURL=EpisodeofcareTypeValueSet.js.map