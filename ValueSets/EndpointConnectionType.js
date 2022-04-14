"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointConnectionType = void 0;
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
exports.EndpointConnectionType = {
    /**
     * DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html
     */
    endpoint_connection_type_DICOMQIDORS: {
        code: "dicom-qido-rs",
        display: "DICOM QIDO-RS",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html
     */
    endpoint_connection_type_DICOMSTOWRS: {
        code: "dicom-stow-rs",
        display: "DICOM STOW-RS",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html
     */
    endpoint_connection_type_DICOMWADORS: {
        code: "dicom-wado-rs",
        display: "DICOM WADO-RS",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html
     */
    endpoint_connection_type_DICOMWADOURI: {
        code: "dicom-wado-uri",
        display: "DICOM WADO-URI",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * Direct Project information - http://wiki.directproject.org/
     */
    endpoint_connection_type_DirectProject: {
        code: "direct-project",
        display: "Direct Project",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.
     */
    endpoint_connection_type_HL7FHIRMessaging: {
        code: "hl7-fhir-msg",
        display: "HL7 FHIR Messaging",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.
     */
    endpoint_connection_type_HL7FHIR: {
        code: "hl7-fhir-rest",
        display: "HL7 FHIR",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * HL7v2 messages over an LLP TCP connection
     */
    endpoint_connection_type_HL7V2MLLP: {
        code: "hl7v2-mllp",
        display: "HL7 v2 MLLP",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display
     */
    endpoint_connection_type_IHEIID: {
        code: "ihe-iid",
        display: "IHE IID",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access
     */
    endpoint_connection_type_IHEXCA: {
        code: "ihe-xca",
        display: "IHE XCA",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery
     */
    endpoint_connection_type_IHEXCPD: {
        code: "ihe-xcpd",
        display: "IHE XCPD",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange
     */
    endpoint_connection_type_IHEXDR: {
        code: "ihe-xdr",
        display: "IHE XDR",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
     */
    endpoint_connection_type_IHEXDS: {
        code: "ihe-xds",
        display: "IHE XDS",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
    /**
     * Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content
     */
    endpoint_connection_type_SecureEmail: {
        code: "secure-email",
        display: "Secure email",
        system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
    },
};
//# sourceMappingURL=EndpointConnectionType.js.map