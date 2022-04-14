"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeitemBillingcodes = void 0;
/**
 * Example set of codes that can be used for billing purposes.
 */
exports.ChargeitemBillingcodes = {
    /**
     * From German EBM billing system:
     * Unvorhergesehene Inanspruchnahme des Vertragsarztes durch einen Patienten;zwischen 19:00 und 22:00 Uhr;an Samstagen, Sonntagen und gesetzlichen Feiertagen, am 24.12. und 31.12. zwischen 07:00 und 19:00 Uhr.
     */
    chargeitem_billingcodes_UnvorhergeseheneInanspruchnahme: {
        code: "1100",
        display: "Unvorhergesehene Inanspruchnahme",
        system: "http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes"
    },
    /**
     * From German EBM billing system:
     * Notfallpauschale im organisierten Not(-fall)dienst und für nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte, Institute und Krankenhäuser bei Inanspruchnahme;zwischen 07:00 und 19:00 Uhr.
     */
    chargeitem_billingcodes_Notfallpauschale: {
        code: "1210",
        display: "Notfallpauschale",
        system: "http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes"
    },
    /**
     * From German EBM billing system:
     * Grundpauschale für Ärzte, Institute und Krankenhäuser, die zur Erbringung von Leistungen innerhalb mindestens eines der Fachgebiete Anästhesiologie, Frauenheilkunde und Geburtshilfe, Haut- und Geschlechtskrankheiten, Mund-, Kiefer- und Gesichtschirurgie und Humangenetik ermächtigt sind.
     */
    chargeitem_billingcodes_Grundpauschale: {
        code: "1320",
        display: "Grundpauschale",
        system: "http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes"
    },
};
//# sourceMappingURL=ChargeitemBillingcodes.js.map