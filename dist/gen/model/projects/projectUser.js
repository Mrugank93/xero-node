"use strict";
/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUser = void 0;
let ProjectUser = /** @class */ (() => {
    class ProjectUser {
        static getAttributeTypeMap() {
            return ProjectUser.attributeTypeMap;
        }
    }
    ProjectUser.discriminator = undefined;
    ProjectUser.attributeTypeMap = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return ProjectUser;
})();
exports.ProjectUser = ProjectUser;
//# sourceMappingURL=projectUser.js.map