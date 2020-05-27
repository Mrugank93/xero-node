"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("././aPIException"), exports);
__exportStar(require("././account"), exports);
__exportStar(require("././accountType"), exports);
__exportStar(require("././earningRate"), exports);
__exportStar(require("././earningRates"), exports);
__exportStar(require("././earningsRateCalculationType"), exports);
__exportStar(require("././earningsType"), exports);
__exportStar(require("././employee"), exports);
__exportStar(require("././employeeStatus"), exports);
__exportStar(require("././employees"), exports);
__exportStar(require("././employmentBasis"), exports);
__exportStar(require("././payRun"), exports);
__exportStar(require("././payRunStatus"), exports);
__exportStar(require("././payRuns"), exports);
__exportStar(require("././payslipSummary"), exports);
__exportStar(require("././rateType"), exports);
__exportStar(require("././settings"), exports);
__exportStar(require("././settingsObject"), exports);
__exportStar(require("././settingsTrackingCategories"), exports);
__exportStar(require("././settingsTrackingCategoriesEmployeeGroups"), exports);
__exportStar(require("././settingsTrackingCategoriesTimesheetCategories"), exports);
__exportStar(require("././timesheet"), exports);
__exportStar(require("././timesheetLine"), exports);
__exportStar(require("././timesheetObject"), exports);
__exportStar(require("././timesheetStatus"), exports);
__exportStar(require("././timesheets"), exports);
__exportStar(require("././validationError"), exports);
const aPIException_1 = require("././aPIException");
const account_1 = require("././account");
const accountType_1 = require("././accountType");
const earningsRateCalculationType_1 = require("././earningsRateCalculationType");
const earningsType_1 = require("././earningsType");
const earningRate_1 = require("././earningRate");
const earningRates_1 = require("././earningRates");
const employee_1 = require("././employee");
const employeeStatus_1 = require("././employeeStatus");
const employees_1 = require("././employees");
const employmentBasis_1 = require("././employmentBasis");
const payRun_1 = require("././payRun");
const payRunStatus_1 = require("././payRunStatus");
const payRuns_1 = require("././payRuns");
const payslipSummary_1 = require("././payslipSummary");
const rateType_1 = require("././rateType");
const settings_1 = require("././settings");
const settingsObject_1 = require("././settingsObject");
const settingsTrackingCategories_1 = require("././settingsTrackingCategories");
const settingsTrackingCategoriesEmployeeGroups_1 = require("././settingsTrackingCategoriesEmployeeGroups");
const settingsTrackingCategoriesTimesheetCategories_1 = require("././settingsTrackingCategoriesTimesheetCategories");
const timesheet_1 = require("././timesheet");
const timesheetLine_1 = require("././timesheetLine");
const timesheetObject_1 = require("././timesheetObject");
const timesheetStatus_1 = require("././timesheetStatus");
const timesheets_1 = require("././timesheets");
const validationError_1 = require("././validationError");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "AccountType": accountType_1.AccountType,
    "EarningsRateCalculationType": earningsRateCalculationType_1.EarningsRateCalculationType,
    "EarningsType": earningsType_1.EarningsType,
    "Employee.GenderEnum": employee_1.Employee.GenderEnum,
    "EmployeeStatus": employeeStatus_1.EmployeeStatus,
    "EmploymentBasis": employmentBasis_1.EmploymentBasis,
    "PayRunStatus": payRunStatus_1.PayRunStatus,
    "RateType": rateType_1.RateType,
    "TimesheetStatus": timesheetStatus_1.TimesheetStatus,
};
let typeMap = {
    "APIException": aPIException_1.APIException,
    "Account": account_1.Account,
    "EarningsRate": earningRate_1.EarningsRate,
    "EarningRates": earningRates_1.EarningRates,
    "Employee": employee_1.Employee,
    "Employees": employees_1.Employees,
    "PayRun": payRun_1.PayRun,
    "PayRuns": payRuns_1.PayRuns,
    "PayslipSummary": payslipSummary_1.PayslipSummary,
    "Settings": settings_1.Settings,
    "SettingsObject": settingsObject_1.SettingsObject,
    "SettingsTrackingCategories": settingsTrackingCategories_1.SettingsTrackingCategories,
    "SettingsTrackingCategoriesEmployeeGroups": settingsTrackingCategoriesEmployeeGroups_1.SettingsTrackingCategoriesEmployeeGroups,
    "SettingsTrackingCategoriesTimesheetCategories": settingsTrackingCategoriesTimesheetCategories_1.SettingsTrackingCategoriesTimesheetCategories,
    "Timesheet": timesheet_1.Timesheet,
    "TimesheetLine": timesheetLine_1.TimesheetLine,
    "TimesheetObject": timesheetObject_1.TimesheetObject,
    "Timesheets": timesheets_1.Timesheets,
    "ValidationError": validationError_1.ValidationError,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            if (subType === 'string') {
                return transformedData.join(',');
            }
            else {
                return transformedData;
            }
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserializeDateFormats(type, data) {
        const isDate = new Date(data);
        if (isNaN(isDate.getTime())) {
            const re = /-?\d+/;
            const m = re.exec(data);
            return new Date(parseInt(m[0], 10));
        }
        else {
            return isDate;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            if (type === "string" && data.toString().substring(0, 6) === "/Date(") {
                return this.deserializeDateFormats(type, data); // For MS dates that are of type 'string'
            }
            else {
                return data;
            }
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            // Asset API returns string even for Array<Model>
            const dataFormatted = typeof data == 'string' ? JSON.parse(data) : data;
            for (let index in dataFormatted) {
                let currentData = dataFormatted[index];
                transformedData.push(ObjectSerializer.deserialize(currentData, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return this.deserializeDateFormats(type, data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map