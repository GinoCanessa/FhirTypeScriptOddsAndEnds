import { Coding } from '../strictmodels';
/**
 * Codes to identify how UDI data was entered.
 */
export declare const UdiEntryType: {
    /**
     * a barcodescanner captured the data from the device label.
     */
    udi_entry_type_Barcode: Coding;
    /**
     * The data originated from a patient's implant card and was read by an operator.
     */
    udi_entry_type_Card: Coding;
    /**
     * The data was read from the label by a person and manually entered. (e.g.  via a keyboard).
     */
    udi_entry_type_Manual: Coding;
    /**
     * An RFID chip reader captured the data from the device label.
     */
    udi_entry_type_RFID: Coding;
    /**
     * The data originated from a patient source and was not directly scanned or read from a label or card.
     */
    udi_entry_type_SelfReported: Coding;
    /**
     * The method of data capture has not been determined.
     */
    udi_entry_type_Unknown: Coding;
};
//# sourceMappingURL=UdiEntryType.d.ts.map