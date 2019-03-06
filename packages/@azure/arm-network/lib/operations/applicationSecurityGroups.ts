/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/applicationSecurityGroupsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ApplicationSecurityGroups. */
export class ApplicationSecurityGroups {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ApplicationSecurityGroups.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified application security group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,applicationSecurityGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about the specified application security group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsGetResponse>
   */
  get(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationSecurityGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, applicationSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): void;
  get(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSecurityGroup>, callback?: msRest.ServiceCallback<Models.ApplicationSecurityGroup>): Promise<Models.ApplicationSecurityGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationSecurityGroupsGetResponse>;
  }

  /**
   * Creates or updates an application security group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param parameters Parameters supplied to the create or update ApplicationSecurityGroup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,applicationSecurityGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationSecurityGroupsCreateOrUpdateResponse>;
  }

  /**
   * Gets all application security groups in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>, callback?: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): Promise<Models.ApplicationSecurityGroupsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.ApplicationSecurityGroupsListAllResponse>;
  }

  /**
   * Gets all the application security groups in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>, callback?: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): Promise<Models.ApplicationSecurityGroupsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationSecurityGroupsListResponse>;
  }

  /**
   * Deletes the specified application security group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, applicationSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates an application security group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationSecurityGroupName The name of the application security group.
   * @param parameters Parameters supplied to the create or update ApplicationSecurityGroup
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: Models.ApplicationSecurityGroup, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applicationSecurityGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all application security groups in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>, callback?: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): Promise<Models.ApplicationSecurityGroupsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.ApplicationSecurityGroupsListAllNextResponse>;
  }

  /**
   * Gets all the application security groups in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationSecurityGroupsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationSecurityGroupsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>, callback?: msRest.ServiceCallback<Models.ApplicationSecurityGroupListResult>): Promise<Models.ApplicationSecurityGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationSecurityGroupsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationSecurityGroups",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationSecurityGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplicationSecurityGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    201: {
      bodyMapper: Mappers.ApplicationSecurityGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSecurityGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
