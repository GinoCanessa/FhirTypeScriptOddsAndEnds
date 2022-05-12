/**
 *  Identifies types of dispensing events
 */
export declare enum V3ActPharmacySupplyTypeValueSetEnum {
    /**
     * DF: A fill providing sufficient supply for one day
     */
    DailyFill = "DF",
    /**
     * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
     */
    EmergencySupply = "EM",
    /**
     * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
     */
    FirstFill = "FF",
    /**
     * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
     */
    FirstFillComplete = "FFC",
    /**
     * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    FirstFillPartFill = "FFP",
    /**
     * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    FirstFillPartialStrength = "FFSS",
    /**
     * FS: A supply action to restock a smaller more local dispensary.
     */
    FloorStock = "FS",
    /**
     * MS: A supply of a manufacturer sample
     */
    ManufacturerSample = "MS",
    /**
     * RF: A fill against an order that has already been filled (or partially filled) at least once.
     */
    Refill = "RF",
    /**
     * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
     */
    RefillComplete = "RFC",
    /**
     * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillCompletePartialStrength = "RFCS",
    /**
     * RFF: The first fill against an order that has already been filled at least once at another facility.
     */
    RefillFirstFillThisFacility = "RFF",
    /**
     * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrengthFirstFillThisFacility = "RFFS",
    /**
     * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    RefillPartFill = "RFP",
    /**
     * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartFillPartialStrength = "RFPS",
    /**
     * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrength = "RFS",
    /**
     * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
     */
    ScriptOwing = "SO",
    /**
     * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
     */
    TrialBalance = "TB",
    /**
     * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    TrialBalancePartialStrength = "TBS",
    /**
     * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
     */
    TrialFill = "TF",
    /**
     * UD: A supply action that provides sufficient material for a single dose.
     */
    UnitDose = "UD",
    /**
     * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
     */
    UnitDoseEquivalent = "UDE"
}
//# sourceMappingURL=V3ActPharmacySupplyTypeValueSetEnum.d.ts.map