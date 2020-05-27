"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XeroClient = void 0;
const openid_client_1 = require("openid-client");
const xero = __importStar(require("./gen/api"));
const request = require("request");
class XeroClient {
    constructor(config) {
        this.config = config;
        this.tokenSet = new openid_client_1.TokenSet;
        this._tenants = [];
        this.accountingApi = new xero.AccountingApi();
        this.assetApi = new xero.AssetApi();
        this.projectApi = new xero.ProjectApi();
        this.payrollAUApi = new xero.PayrollAUApi();
        this.payrollNZApi = new xero.PayrollNZApi();
        this.bankFeedsApi = new xero.BankFeedsApi();
    }
    get tenants() {
        return this._tenants;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.config) {
                const issuer = yield openid_client_1.Issuer.discover('https://identity.xero.com');
                this.openIdClient = new issuer.Client({
                    client_id: this.config.clientId,
                    client_secret: this.config.clientSecret,
                    redirect_uris: this.config.redirectUris,
                });
                this.openIdClient[openid_client_1.custom.clock_tolerance] = 5;
            }
            return this;
        });
    }
    buildConsentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
            let url;
            if (this.config) {
                url = this.openIdClient.authorizationUrl({
                    redirect_uri: this.config.redirectUris[0],
                    scope: this.config.scopes.join(' ') || 'openid email profile'
                });
            }
            return url;
        });
    }
    apiCallback(callbackUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = this.openIdClient.callbackParams(callbackUrl);
            const check = Object.assign({}, params);
            this.tokenSet = yield this.openIdClient.callback(this.config.redirectUris[0], params, check);
            this.setAccessToken();
            return this.tokenSet;
        });
    }
    disconnect(connectionId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.queryApi('DELETE', `https://api.xero.com/connections/${connectionId}`);
            this.setAccessToken();
            return this.tokenSet;
        });
    }
    readIdTokenClaims() {
        return this.tokenSet.claims();
    }
    readTokenSet() {
        return this.tokenSet;
    }
    setTokenSet(tokenSet) {
        this.tokenSet = tokenSet;
        this.setAccessToken();
    }
    refreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.tokenSet) {
                throw new Error('tokenSet is not defined');
            }
            const refreshedTokenSet = yield this.openIdClient.refresh(this.tokenSet.refresh_token);
            this.tokenSet = refreshedTokenSet;
            this.setAccessToken();
            return this.tokenSet;
        });
    }
    encodeBody(params) {
        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        return formBody.join("&");
    }
    formatMsDate(dateString) {
        const epoch = Date.parse(dateString);
        return "/Date(" + epoch + "+0000)/";
    }
    refreshWithRefreshToken(clientId, clientSecret, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.postWithRefreshToken(clientId, clientSecret, refreshToken);
            const tokenSet = JSON.parse(result.body);
            this.tokenSet = tokenSet;
            this.setAccessToken();
            return this.tokenSet;
        });
    }
    postWithRefreshToken(clientId, clientSecret, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            };
            return new Promise((resolve, reject) => {
                request({
                    method: 'POST',
                    uri: 'https://identity.xero.com/connect/token',
                    headers: {
                        authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString('base64'),
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: this.encodeBody(body)
                }, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    updateTenants() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.queryApi('GET', 'https://api.xero.com/connections');
            let tenants = result.body.map(connection => connection);
            const getOrgsForAll = tenants.map((tenant) => __awaiter(this, void 0, void 0, function* () {
                const result = yield this.accountingApi.getOrganisations(tenant.tenantId);
                return result.body.organisations[0];
            }));
            const orgData = yield Promise.all(getOrgsForAll);
            tenants.map((tenant) => {
                tenant.orgData = orgData.filter((el) => el.organisationID == tenant.tenantId)[0];
            });
            // sorting tenants so the most connection / active tenant is at index 0
            tenants.sort((a, b) => new Date(b.updatedDateUtc) - new Date(a.updatedDateUtc));
            this._tenants = tenants;
            return tenants;
        });
    }
    queryApi(method, uri) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                request({
                    method,
                    uri,
                    auth: {
                        bearer: this.tokenSet.access_token
                    },
                    json: true
                }, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    setAccessToken() {
        const accessToken = this.tokenSet.access_token;
        if (typeof accessToken === 'undefined') {
            throw new Error('Access token is undefined!');
        }
        this.accountingApi.accessToken = accessToken;
        this.assetApi.accessToken = accessToken;
        this.projectApi.accessToken = accessToken;
        this.payrollAUApi.accessToken = accessToken;
        this.payrollNZApi.accessToken = accessToken;
        this.bankFeedsApi.accessToken = accessToken;
    }
}
exports.XeroClient = XeroClient;
//# sourceMappingURL=XeroClient.js.map