import { Coding } from '../fhir.js';
/**
 *  ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 */
export declare const V3ActConsentDirectiveValueSet: {
    /**
     * _ActConsentDirective: Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.
     *
     *
     *                            Usage Note: Such agreements may be considered "consent directives" or "contracts" depending on the context, and are considered closely related or synonymous from a legal perspective.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Privacy Consent Directive permitting or restricting in whole or part the collection, access, use, and disclosure of health information, and any associated handling caveats.
     *                            Healthcare Medical Consent Directive to receive medical procedures after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Research Informed Consent for participation in clinical trials and disclosure of health information after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Substitute decision maker delegation in which the grantee assumes responsibility to act on behalf of the grantor.
     *                            Contracts in which the agreement requires assent/dissent by the grantor of terms offered by a grantee, a consumer opts out of an "award" system for use of a retailer's marketing or credit card vendor's point collection cards in exchange for allowing purchase tracking and profiling.
     *                            A mobile device or App privacy policy and terms of service to which a user must agree in whole or in part in order to utilize the service.
     *                            Agreements between a client and an authorization server or between an authorization server and a resource operator and/or resource owner permitting or restricting e.g., collection, access, use, and disclosure of information, and any associated handling caveats.
     */
    readonly ActConsentDirective: Coding;
    /**
     * EMRGONLY: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations.
     *
     *
     *                            Definition: Opt-in to disclosure of health information for emergency only consent directive.
     */
    readonly EmergencyOnly: Coding;
    /**
     * GRANTORCHOICE: A grantor's terms of agreement to which a grantee may assent or dissent, and which may include an opportunity for a grantee to request restrictions or extensions.
     *
     *
     *                            Comment: A grantor typically is able to stipulate preferred terms of agreement when the grantor has control over the topic of the agreement, which a grantee must accept in full or may be offered an opportunity to extend or restrict certain terms.
     *
     *
     *                            Usage Note: If the grantor's term of agreement must be accepted in full, then this is considered "basic consent".  If a grantee is offered an opportunity to extend or restrict certain terms, then the agreement is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A PHR account holder [grantor] may require any PHR user [grantee]  to accept the terms of agreement in full, or may permit a PHR user to extend or restrict terms selected by the account holder or requested by the PHR user.
     *                            Non-healthcare: The owner of a resource server [grantor] may require any authorization server [grantee] to meet authorization requirements stipulated in the grantor's terms of agreement.
     */
    readonly GrantorChoice: Coding;
    /**
     * IMPLIED: A grantor's presumed assent to the grantee's terms of agreement is based on the grantor's behavior, which may result from not expressly assenting to the consent directive offered, or from having no right to assent or dissent offered by the grantee.
     *
     *
     *                            Comment: Implied or "implicit" consent occurs when the behavior of the grantor is understood by a reasonable person to signal agreement to the grantee's terms.
     *
     *
     *                            Usage Note: Implied consent with no opportunity to assent or dissent to certain terms is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient schedules an appointment with a provider, and either does not take the opportunity to expressly assent or dissent to the provider's consent directive, does not have an opportunity to do so, as in the case where emergency care is required, or simply behaves as though the patient [grantor] agrees to the rights granted to the provider [grantee] in an implicit consent directive.
     *                            An injured and unconscious patient is deemed to have assented to emergency treatment by those permitted to do so under jurisdictional laws, e.g., Good Samaritan laws.
     *                            Non-healthcare: Upon receiving a driver's license, the driver is deemed to have assented without explicitly consenting to undergoing field sobriety tests.
     *                            A corporation that does business in a foreign nation is deemed to have deemed to have assented without explicitly consenting to abide by that nation's laws.
     */
    readonly ImpliedConsent: Coding;
    /**
     * IMPLIEDD: A grantor's presumed assent to the grantee's terms of agreement, which is based on the grantor's behavior, and includes a right to dissent to certain terms.
     *
     *
     *                            Comment: A grantor assenting to the grantee's terms of agreement may or may not exercise a right to dissent to grantor selected terms or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Implied or "implicit" consent with an "opportunity to dissent" occurs when the grantor's behavior is understood by a reasonable person to signal assent to the grantee's terms of agreement whether the grantor requests or the grantee approves further restrictions, is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Examples: A healthcare provider deems a patient's assent to disclosure of health information to family members and friends, but offers an opportunity or permits the patient to dissent to such disclosures.
     *                            A health information exchanges deems a patient to have assented to disclosure of health information for treatment purposes, but offers the patient an opportunity to dissents to disclosure to particular provider organizations.
     *                            Non-healthcare Examples: A bank deems a banking customer's assent to specified collection, access, use, or disclosure of financial information as a requirement of holding a bank account, but provides the user an opportunity to limit third-party collection, access, use or disclosure of that information for marketing purposes.
     */
    readonly ImpliedConsentWithOpportunityToDissent: Coding;
    /**
     * NOCONSENT: No notification or opportunity is provided for a grantor to assent or dissent to a grantee's terms of agreement.
     *
     *
     *                            Comment: A "No Consent" policy scheme provides no opportunity for accommodation of an individual's preferences, and may not comply with Fair Information Practice Principles [FIPP] by enabling the data subject to object, access collected information, correct errors, or have accounting of disclosures.
     *
     *
     *                            Usage Note: The grantee's terms of agreement, may be available to the grantor by reviewing the grantee's privacy policies, but there is no notice by which a grantor is apprised of the policy directly or able to acknowledge.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: Without notification or an opportunity to assent or dissent, a patient's health information is automatically included in and available (often according to certain rules) through a health information exchange.  Note that this differs from implied consent, where the patient is assumed to have consented.
     *                            Without notification or an opportunity to assent or dissent, a patient's health information is collected, accessed, used, or disclosed for research, public health, security, fraud prevention, court order, or law enforcement.
     *                            Non-healthcare: Without notification or an opportunity to assent or dissent, a consumer's healthcare or non-healthcare internet searches are aggregated for secondary uses such as behavioral tracking and profiling.
     *                            Without notification or an opportunity to assent or dissent, a consumer's location and activities in a shopping mall are tracked by RFID tags on purchased items.
     */
    readonly NoConsent: Coding;
    /**
     * NOPP: Acknowledgement of custodian notice of privacy practices.
     *
     *
     *                            Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified.
     */
    readonly NoticeOfPrivacyPractices: Coding;
    /**
     * OPTIN: A grantor's assent to the terms of an agreement offered by a grantee without an opportunity for to dissent to any terms.
     *
     *
     *                            Comment: Acceptance of a grantee's terms pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-in with no opportunity for a grantor to restrict certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] signs a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, and revocation policies.
     *                            Non-healthcare: An employee [grantor] signs an employer's [grantee's] non-disclosure and non-compete agreement.
     */
    readonly OptIn: Coding;
    /**
     * OPTINR: A grantor's assent to the grantee's terms of an agreement with an opportunity for to dissent to certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A grantor dissenting to the grantee's terms of agreement may or may not exercise a right to assent to grantor's pre-approved restrictions or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Opt-in with restrictions is considered "granular consent" because the grantor has an opportunity to narrow the permissions sought by the grantee.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare:  A patient assent to grantee's consent directive terms for collection, access, use, or disclosure of health information, and dissents to disclosure to certain recipients as allowed by the provider's pre-approved restriction list.
     *                            Non-Healthcare: A cell phone user assents to the cell phone's privacy practices and terms of use, but dissents from location tracking by turning off the cell phone's tracking capability.
     */
    readonly OptInWithRestrictions: Coding;
    /**
     * OPTOUT: A grantor's dissent to the terms of agreement offered by a grantee without an opportunity for to assent to any terms.
     *
     *
     *                            Comment: Rejection of a grantee's terms of agreement pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-out with no opportunity for a grantor to permit certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] declines to sign a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, revocation policies, and consequences of not assenting.
     *                            Non-healthcare: An employee [grantor] refuses to sign an employer's [grantee's] agreement not to join unions or participate in a strike where state law protects employee's collective bargaining rights.
     *                            A citizen [grantor] refuses to enroll in mandatory government [grantee] health insurance based on religious beliefs, which is an exemption.
     */
    readonly OpOut: Coding;
    /**
     * OPTOUTE: A grantor's dissent to the grantee's terms of agreement except for certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A rejection of a grantee's terms of agreement while assenting to certain permissions sought by the grantee or requesting approval of additional grantor terms.
     *
     *
     *                            Usage Note: Opt-out with exceptions is considered a "granular consent" because the grantor has an opportunity to accept certain permissions sought by the grantee or request additional grantor terms, while rejecting other grantee terms.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] dissents to a health information exchange consent directive with the exception of disclosure based on a limited "time to live" shared secret [e.g., a token or password], which the patient can give to a provider when seeking care.
     *                            Non-healthcare: A social media user [grantor] dissents from public access to their account, but assents to access to a circle of friends.
     */
    readonly OptOutWithExceptions: Coding;
};
/**
 *  ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 */
export declare type V3ActConsentDirectiveValueSetType = typeof V3ActConsentDirectiveValueSet;
/**
 *  ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 */
export declare enum V3ActConsentDirectiveValueSetEnum {
    /**
     * _ActConsentDirective: Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.
     *
     *
     *                            Usage Note: Such agreements may be considered "consent directives" or "contracts" depending on the context, and are considered closely related or synonymous from a legal perspective.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Privacy Consent Directive permitting or restricting in whole or part the collection, access, use, and disclosure of health information, and any associated handling caveats.
     *                            Healthcare Medical Consent Directive to receive medical procedures after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Research Informed Consent for participation in clinical trials and disclosure of health information after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Substitute decision maker delegation in which the grantee assumes responsibility to act on behalf of the grantor.
     *                            Contracts in which the agreement requires assent/dissent by the grantor of terms offered by a grantee, a consumer opts out of an "award" system for use of a retailer's marketing or credit card vendor's point collection cards in exchange for allowing purchase tracking and profiling.
     *                            A mobile device or App privacy policy and terms of service to which a user must agree in whole or in part in order to utilize the service.
     *                            Agreements between a client and an authorization server or between an authorization server and a resource operator and/or resource owner permitting or restricting e.g., collection, access, use, and disclosure of information, and any associated handling caveats.
     */
    ActConsentDirective = "_ActConsentDirective",
    /**
     * EMRGONLY: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations.
     *
     *
     *                            Definition: Opt-in to disclosure of health information for emergency only consent directive.
     */
    EmergencyOnly = "EMRGONLY",
    /**
     * GRANTORCHOICE: A grantor's terms of agreement to which a grantee may assent or dissent, and which may include an opportunity for a grantee to request restrictions or extensions.
     *
     *
     *                            Comment: A grantor typically is able to stipulate preferred terms of agreement when the grantor has control over the topic of the agreement, which a grantee must accept in full or may be offered an opportunity to extend or restrict certain terms.
     *
     *
     *                            Usage Note: If the grantor's term of agreement must be accepted in full, then this is considered "basic consent".  If a grantee is offered an opportunity to extend or restrict certain terms, then the agreement is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A PHR account holder [grantor] may require any PHR user [grantee]  to accept the terms of agreement in full, or may permit a PHR user to extend or restrict terms selected by the account holder or requested by the PHR user.
     *                            Non-healthcare: The owner of a resource server [grantor] may require any authorization server [grantee] to meet authorization requirements stipulated in the grantor's terms of agreement.
     */
    GrantorChoice = "GRANTORCHOICE",
    /**
     * IMPLIED: A grantor's presumed assent to the grantee's terms of agreement is based on the grantor's behavior, which may result from not expressly assenting to the consent directive offered, or from having no right to assent or dissent offered by the grantee.
     *
     *
     *                            Comment: Implied or "implicit" consent occurs when the behavior of the grantor is understood by a reasonable person to signal agreement to the grantee's terms.
     *
     *
     *                            Usage Note: Implied consent with no opportunity to assent or dissent to certain terms is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient schedules an appointment with a provider, and either does not take the opportunity to expressly assent or dissent to the provider's consent directive, does not have an opportunity to do so, as in the case where emergency care is required, or simply behaves as though the patient [grantor] agrees to the rights granted to the provider [grantee] in an implicit consent directive.
     *                            An injured and unconscious patient is deemed to have assented to emergency treatment by those permitted to do so under jurisdictional laws, e.g., Good Samaritan laws.
     *                            Non-healthcare: Upon receiving a driver's license, the driver is deemed to have assented without explicitly consenting to undergoing field sobriety tests.
     *                            A corporation that does business in a foreign nation is deemed to have deemed to have assented without explicitly consenting to abide by that nation's laws.
     */
    ImpliedConsent = "IMPLIED",
    /**
     * IMPLIEDD: A grantor's presumed assent to the grantee's terms of agreement, which is based on the grantor's behavior, and includes a right to dissent to certain terms.
     *
     *
     *                            Comment: A grantor assenting to the grantee's terms of agreement may or may not exercise a right to dissent to grantor selected terms or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Implied or "implicit" consent with an "opportunity to dissent" occurs when the grantor's behavior is understood by a reasonable person to signal assent to the grantee's terms of agreement whether the grantor requests or the grantee approves further restrictions, is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Examples: A healthcare provider deems a patient's assent to disclosure of health information to family members and friends, but offers an opportunity or permits the patient to dissent to such disclosures.
     *                            A health information exchanges deems a patient to have assented to disclosure of health information for treatment purposes, but offers the patient an opportunity to dissents to disclosure to particular provider organizations.
     *                            Non-healthcare Examples: A bank deems a banking customer's assent to specified collection, access, use, or disclosure of financial information as a requirement of holding a bank account, but provides the user an opportunity to limit third-party collection, access, use or disclosure of that information for marketing purposes.
     */
    ImpliedConsentWithOpportunityToDissent = "IMPLIEDD",
    /**
     * NOCONSENT: No notification or opportunity is provided for a grantor to assent or dissent to a grantee's terms of agreement.
     *
     *
     *                            Comment: A "No Consent" policy scheme provides no opportunity for accommodation of an individual's preferences, and may not comply with Fair Information Practice Principles [FIPP] by enabling the data subject to object, access collected information, correct errors, or have accounting of disclosures.
     *
     *
     *                            Usage Note: The grantee's terms of agreement, may be available to the grantor by reviewing the grantee's privacy policies, but there is no notice by which a grantor is apprised of the policy directly or able to acknowledge.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: Without notification or an opportunity to assent or dissent, a patient's health information is automatically included in and available (often according to certain rules) through a health information exchange.  Note that this differs from implied consent, where the patient is assumed to have consented.
     *                            Without notification or an opportunity to assent or dissent, a patient's health information is collected, accessed, used, or disclosed for research, public health, security, fraud prevention, court order, or law enforcement.
     *                            Non-healthcare: Without notification or an opportunity to assent or dissent, a consumer's healthcare or non-healthcare internet searches are aggregated for secondary uses such as behavioral tracking and profiling.
     *                            Without notification or an opportunity to assent or dissent, a consumer's location and activities in a shopping mall are tracked by RFID tags on purchased items.
     */
    NoConsent = "NOCONSENT",
    /**
     * NOPP: Acknowledgement of custodian notice of privacy practices.
     *
     *
     *                            Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified.
     */
    NoticeOfPrivacyPractices = "NOPP",
    /**
     * OPTIN: A grantor's assent to the terms of an agreement offered by a grantee without an opportunity for to dissent to any terms.
     *
     *
     *                            Comment: Acceptance of a grantee's terms pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-in with no opportunity for a grantor to restrict certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] signs a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, and revocation policies.
     *                            Non-healthcare: An employee [grantor] signs an employer's [grantee's] non-disclosure and non-compete agreement.
     */
    OptIn = "OPTIN",
    /**
     * OPTINR: A grantor's assent to the grantee's terms of an agreement with an opportunity for to dissent to certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A grantor dissenting to the grantee's terms of agreement may or may not exercise a right to assent to grantor's pre-approved restrictions or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Opt-in with restrictions is considered "granular consent" because the grantor has an opportunity to narrow the permissions sought by the grantee.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare:  A patient assent to grantee's consent directive terms for collection, access, use, or disclosure of health information, and dissents to disclosure to certain recipients as allowed by the provider's pre-approved restriction list.
     *                            Non-Healthcare: A cell phone user assents to the cell phone's privacy practices and terms of use, but dissents from location tracking by turning off the cell phone's tracking capability.
     */
    OptInWithRestrictions = "OPTINR",
    /**
     * OPTOUT: A grantor's dissent to the terms of agreement offered by a grantee without an opportunity for to assent to any terms.
     *
     *
     *                            Comment: Rejection of a grantee's terms of agreement pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-out with no opportunity for a grantor to permit certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] declines to sign a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, revocation policies, and consequences of not assenting.
     *                            Non-healthcare: An employee [grantor] refuses to sign an employer's [grantee's] agreement not to join unions or participate in a strike where state law protects employee's collective bargaining rights.
     *                            A citizen [grantor] refuses to enroll in mandatory government [grantee] health insurance based on religious beliefs, which is an exemption.
     */
    OpOut = "OPTOUT",
    /**
     * OPTOUTE: A grantor's dissent to the grantee's terms of agreement except for certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A rejection of a grantee's terms of agreement while assenting to certain permissions sought by the grantee or requesting approval of additional grantor terms.
     *
     *
     *                            Usage Note: Opt-out with exceptions is considered a "granular consent" because the grantor has an opportunity to accept certain permissions sought by the grantee or request additional grantor terms, while rejecting other grantee terms.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] dissents to a health information exchange consent directive with the exception of disclosure based on a limited "time to live" shared secret [e.g., a token or password], which the patient can give to a provider when seeking care.
     *                            Non-healthcare: A social media user [grantor] dissents from public access to their account, but assents to access to a circle of friends.
     */
    OptOutWithExceptions = "OPTOUTE"
}
//# sourceMappingURL=V3ActConsentDirectiveValueSet.d.ts.map