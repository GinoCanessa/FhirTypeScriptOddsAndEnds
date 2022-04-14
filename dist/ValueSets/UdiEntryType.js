"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdiEntryType = void 0;
/**
 * Codes to identify how UDI data was entered.
 */
exports.UdiEntryType = {
    /**
     * a barcodescanner captured the data from the device label.
     */
    udi_entry_type_Barcode: {
        code: "barcode",
        display: "Barcode",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
    /**
     * The data originated from a patient's implant card and was read by an operator.
     */
    udi_entry_type_Card: {
        code: "card",
        display: "Card",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
    /**
     * The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    udi_entry_type_Manual: {
        code: "manual",
        display: "Manual",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
    /**
     * An RFID chip reader captured the data from the device label.
     */
    udi_entry_type_RFID: {
        code: "rfid",
        display: "RFID",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
    /**
     * The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    udi_entry_type_SelfReported: {
        code: "self-reported",
        display: "Self Reported",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
    /**
     * The method of data capture has not been determined.
     */
    udi_entry_type_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/udi-entry-type"
    },
};
//# sourceMappingURL=UdiEntryType.js.map