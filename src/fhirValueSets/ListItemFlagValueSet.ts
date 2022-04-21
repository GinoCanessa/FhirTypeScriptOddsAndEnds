// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-item-flag|4.0.1

import { Coding } from '../fhir.js'

/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export const ListItemFlagValueSet = {
  /**
   * 01: No change has been made to the status of this medicine item.
   */
  Unchanged: new Coding({
    display: "Unchanged",
    code: "01",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
  /**
   * 02: The medicine item has changed. The change may be described in an extension (not defined yet)
   */
  Changed: new Coding({
    display: "Changed",
    code: "02",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
  /**
   * 03: The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient's clinical condition.
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "03",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
  /**
   * 04: A new medicine item has been prescribed
   */
  Prescribed: new Coding({
    display: "Prescribed",
    code: "04",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
  /**
   * 05: Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.
   */
  Ceased: new Coding({
    display: "Ceased",
    code: "05",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
  /**
   * 06: Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.
   */
  Suspended: new Coding({
    display: "Suspended",
    code: "06",
    system: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  }),
} as const;

/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export type ListItemFlagValueSetType = typeof ListItemFlagValueSet;

/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 */
export enum ListItemFlagValueSetEnum {
  /**
   * 01: No change has been made to the status of this medicine item.
   */
  Unchanged = "01",
  /**
   * 02: The medicine item has changed. The change may be described in an extension (not defined yet)
   */
  Changed = "02",
  /**
   * 03: The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient's clinical condition.
   */
  Cancelled = "03",
  /**
   * 04: A new medicine item has been prescribed
   */
  Prescribed = "04",
  /**
   * 05: Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.
   */
  Ceased = "05",
  /**
   * 06: Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.
   */
  Suspended = "06",
}
