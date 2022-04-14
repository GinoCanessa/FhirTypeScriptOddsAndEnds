import { Coding } from '../strictmodels';
/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 */
export declare const EndpointConnectionType: {
    /**
     * DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html
     */
    endpoint_connection_type_DICOMQIDORS: Coding;
    /**
     * DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html
     */
    endpoint_connection_type_DICOMSTOWRS: Coding;
    /**
     * DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html
     */
    endpoint_connection_type_DICOMWADORS: Coding;
    /**
     * DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html
     */
    endpoint_connection_type_DICOMWADOURI: Coding;
    /**
     * Direct Project information - http://wiki.directproject.org/
     */
    endpoint_connection_type_DirectProject: Coding;
    /**
     * Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.
     */
    endpoint_connection_type_HL7FHIRMessaging: Coding;
    /**
     * Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.
     */
    endpoint_connection_type_HL7FHIR: Coding;
    /**
     * HL7v2 messages over an LLP TCP connection
     */
    endpoint_connection_type_HL7V2MLLP: Coding;
    /**
     * IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display
     */
    endpoint_connection_type_IHEIID: Coding;
    /**
     * IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access
     */
    endpoint_connection_type_IHEXCA: Coding;
    /**
     * IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery
     */
    endpoint_connection_type_IHEXCPD: Coding;
    /**
     * IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange
     */
    endpoint_connection_type_IHEXDR: Coding;
    /**
     * IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing
     */
    endpoint_connection_type_IHEXDS: Coding;
    /**
     * Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content
     */
    endpoint_connection_type_SecureEmail: Coding;
};
//# sourceMappingURL=EndpointConnectionType.d.ts.map