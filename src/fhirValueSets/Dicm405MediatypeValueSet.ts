// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Media Type Code
 */
export const Dicm405MediatypeValueSet = {
  /**
   * Film type of output
   */
  dicom_dcim_Film: Coding.FromStrict({
    code: "110010",
    display: "Film",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * A device that connects using the USB hard drive interface. These may be USB-Sticks, portable hard drives, and other technologies
   */
  dicom_dcim_USBDiskEmulation: Coding.FromStrict({
    code: "110030",
    display: "USB Disk Emulation",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * Email and email attachments used as a media for data transport
   */
  dicom_dcim_Email: Coding.FromStrict({
    code: "110031",
    display: "Email",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * CD-R, CD-ROM, and CD-RW media used for data transport
   */
  dicom_dcim_CD: Coding.FromStrict({
    code: "110032",
    display: "CD",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * DVD, DVD-RAM, and other DVD formatted media used for data transport
   */
  dicom_dcim_DVD: Coding.FromStrict({
    code: "110033",
    display: "DVD",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * Media that comply with the Compact Flash standard
   */
  dicom_dcim_CompactFlash: Coding.FromStrict({
    code: "110034",
    display: "Compact Flash",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * Media that comply with the Multi-media Card standard
   */
  dicom_dcim_MultiMediaCard: Coding.FromStrict({
    code: "110035",
    display: "Multi-media Card",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * Media that comply with the Secure Digital Card standard
   */
  dicom_dcim_SecureDigitalCard: Coding.FromStrict({
    code: "110036",
    display: "Secure Digital Card",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * URI Identifier for network or other resource, see RFC 3968
   */
  dicom_dcim_URI: Coding.FromStrict({
    code: "110037",
    display: "URI",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
  /**
   * Any paper or similar document
   */
  dicom_dcim_PaperDocument: Coding.FromStrict({
    code: "110038",
    display: "Paper Document",
    system: "http://dicom.nema.org/resources/ontology/DCM"
  }),
};