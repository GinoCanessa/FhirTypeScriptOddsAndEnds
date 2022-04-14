"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryType = void 0;
/**
 * Type for access of external URI.
 */
exports.RepositoryType = {
    /**
     * When URL is clicked, the resource can be seen directly (by webpage or by download link format).
     */
    repository_type_ClickAndSee: {
        code: "directlink",
        display: "Click and see",
        system: "http://hl7.org/fhir/repository-type"
    },
    /**
     * When logged into the website, the resource can be seen.
     */
    repository_type_ResultCannotBeAccessUnlessAnAccountIsLoggedIn: {
        code: "login",
        display: "Result cannot be access unless an account is logged in",
        system: "http://hl7.org/fhir/repository-type"
    },
    /**
     * When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    repository_type_ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: {
        code: "oauth",
        display: "Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource)",
        system: "http://hl7.org/fhir/repository-type"
    },
    /**
     * When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
     */
    repository_type_TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: {
        code: "openapi",
        display: "The URL is the RESTful or other kind of API that can access to the result.",
        system: "http://hl7.org/fhir/repository-type"
    },
    /**
     * Some other complicated or particular way to get resource from URL.
     */
    repository_type_SomeOtherComplicatedOrParticularWayToGetResourceFromURL: {
        code: "other",
        display: "Some other complicated or particular way to get resource from URL.",
        system: "http://hl7.org/fhir/repository-type"
    },
};
//# sourceMappingURL=RepositoryType.js.map