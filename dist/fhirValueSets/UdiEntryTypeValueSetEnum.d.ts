/**
 * Codes to identify how UDI data was entered.
 */
export declare enum UdiEntryTypeValueSetEnum {
    /**
     * barcode: a barcodescanner captured the data from the device label.
     */
    Barcode = "barcode",
    /**
     * card: The data originated from a patient's implant card and was read by an operator.
     */
    Card = "card",
    /**
     * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    Manual = "manual",
    /**
     * rfid: An RFID chip reader captured the data from the device label.
     */
    RFID = "rfid",
    /**
     * self-reported: The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    SelfReported = "self-reported",
    /**
     * unknown: The method of data capture has not been determined.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=UdiEntryTypeValueSetEnum.d.ts.map