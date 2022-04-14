"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterType = void 0;
/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
exports.EncounterType = {
    encounter_type_AnnualDiabetesMellitusScreening: {
        code: "ADMS",
        display: "Annual diabetes mellitus screening",
        system: "http://terminology.hl7.org/CodeSystem/encounter-type"
    },
    encounter_type_BoneDrillingBoneMarrowPunctionInClinic: {
        code: "BD/BM-clin",
        display: "Bone drilling/bone marrow punction in clinic",
        system: "http://terminology.hl7.org/CodeSystem/encounter-type"
    },
    encounter_type_InfantColonScreening60Minutes: {
        code: "CCS60",
        display: "Infant colon screening - 60 minutes",
        system: "http://terminology.hl7.org/CodeSystem/encounter-type"
    },
    encounter_type_OutpatientKenacortInjection: {
        code: "OKI",
        display: "Outpatient Kenacort injection",
        system: "http://terminology.hl7.org/CodeSystem/encounter-type"
    },
};
//# sourceMappingURL=EncounterType.js.map