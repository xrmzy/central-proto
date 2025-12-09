// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hris_v1_employee_employee_pb = require('../../../hris/v1/employee/employee_pb.js');

function serialize_hris_v1_employee_EmployeeResponse(arg) {
  if (!(arg instanceof hris_v1_employee_employee_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type hris.v1.employee.EmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hris_v1_employee_EmployeeResponse(buffer_arg) {
  return hris_v1_employee_employee_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hris_v1_employee_GetEmployeeRequest(arg) {
  if (!(arg instanceof hris_v1_employee_employee_pb.GetEmployeeRequest)) {
    throw new Error('Expected argument of type hris.v1.employee.GetEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hris_v1_employee_GetEmployeeRequest(buffer_arg) {
  return hris_v1_employee_employee_pb.GetEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeServiceService = exports.EmployeeServiceService = {
  getEmployee: {
    path: '/hris.v1.employee.EmployeeService/GetEmployee',
    requestStream: false,
    responseStream: false,
    requestType: hris_v1_employee_employee_pb.GetEmployeeRequest,
    responseType: hris_v1_employee_employee_pb.EmployeeResponse,
    requestSerialize: serialize_hris_v1_employee_GetEmployeeRequest,
    requestDeserialize: deserialize_hris_v1_employee_GetEmployeeRequest,
    responseSerialize: serialize_hris_v1_employee_EmployeeResponse,
    responseDeserialize: deserialize_hris_v1_employee_EmployeeResponse,
  },
};

exports.EmployeeServiceClient = grpc.makeGenericClientConstructor(EmployeeServiceService);
