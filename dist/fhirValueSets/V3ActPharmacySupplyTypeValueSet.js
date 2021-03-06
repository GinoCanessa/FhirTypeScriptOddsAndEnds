// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType|2014-03-26
import { Coding } from '../fhir.js';
/**
 *  Identifies types of dispensing events
 */
export const V3ActPharmacySupplyTypeValueSet = {
    /**
     * DF: A fill providing sufficient supply for one day
     */
    DailyFill: new Coding({
        display: "Daily Fill",
        code: "DF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
     */
    EmergencySupply: new Coding({
        display: "Emergency Supply",
        code: "EM",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
     */
    FirstFill: new Coding({
        display: "First Fill",
        code: "FF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
     */
    FirstFillComplete: new Coding({
        display: "First Fill - Complete",
        code: "FFC",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    FirstFillPartFill: new Coding({
        display: "First Fill - Part Fill",
        code: "FFP",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    FirstFillPartialStrength: new Coding({
        display: "first fill, partial strength",
        code: "FFSS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * FS: A supply action to restock a smaller more local dispensary.
     */
    FloorStock: new Coding({
        display: "Floor stock",
        code: "FS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * MS: A supply of a manufacturer sample
     */
    ManufacturerSample: new Coding({
        display: "Manufacturer Sample",
        code: "MS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RF: A fill against an order that has already been filled (or partially filled) at least once.
     */
    Refill: new Coding({
        display: "Refill",
        code: "RF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
     */
    RefillComplete: new Coding({
        display: "Refill - Complete",
        code: "RFC",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillCompletePartialStrength: new Coding({
        display: "refill complete partial strength",
        code: "RFCS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFF: The first fill against an order that has already been filled at least once at another facility.
     */
    RefillFirstFillThisFacility: new Coding({
        display: "Refill (First fill this facility)",
        code: "RFF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrengthFirstFillThisFacility: new Coding({
        display: "refill partial strength (first fill this facility)",
        code: "RFFS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    RefillPartFill: new Coding({
        display: "Refill - Part Fill",
        code: "RFP",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartFillPartialStrength: new Coding({
        display: "refill part fill partial strength",
        code: "RFPS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrength: new Coding({
        display: "refill partial strength",
        code: "RFS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
     */
    ScriptOwing: new Coding({
        display: "Script Owing",
        code: "SO",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
     */
    TrialBalance: new Coding({
        display: "Trial Balance",
        code: "TB",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    TrialBalancePartialStrength: new Coding({
        display: "trial balance partial strength",
        code: "TBS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
     */
    TrialFill: new Coding({
        display: "Trial Fill",
        code: "TF",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * UD: A supply action that provides sufficient material for a single dose.
     */
    UnitDose: new Coding({
        display: "Unit Dose",
        code: "UD",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
    /**
     * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
     */
    UnitDoseEquivalent: new Coding({
        display: "unit dose equivalent",
        code: "UDE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    }),
};
/**
 *  Identifies types of dispensing events
 */
//# sourceMappingURL=V3ActPharmacySupplyTypeValueSet.js.map