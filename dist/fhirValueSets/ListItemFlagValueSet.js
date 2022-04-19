// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export const ListItemFlagValueSet = {
    /**
     * No change has been made to the status of this medicine item.
     */
    list_item_flag_Unchanged: Coding.FromStrict({
        code: "01",
        display: "Unchanged",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
    /**
     * The medicine item has changed. The change may be described in an extension (not defined yet)
     */
    list_item_flag_Changed: Coding.FromStrict({
        code: "02",
        display: "Changed",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
    /**
     * The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient's clinical condition.
     */
    list_item_flag_Cancelled: Coding.FromStrict({
        code: "03",
        display: "Cancelled",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
    /**
     * A new medicine item has been prescribed
     */
    list_item_flag_Prescribed: Coding.FromStrict({
        code: "04",
        display: "Prescribed",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
    /**
     * Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.
     */
    list_item_flag_Ceased: Coding.FromStrict({
        code: "05",
        display: "Ceased",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
    /**
     * Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.
     */
    list_item_flag_Suspended: Coding.FromStrict({
        code: "06",
        display: "Suspended",
        system: "urn:oid:1.2.36.1.2001.1001.101.104.16592"
    }),
};
//# sourceMappingURL=ListItemFlagValueSet.js.map