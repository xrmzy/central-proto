// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hris_v1_payroll_payroll_pb = require('../../../hris/v1/payroll/payroll_pb.js');

function serialize_hris_v1_payroll_GetPayrollReques(arg) {
  if (!(arg instanceof hris_v1_payroll_payroll_pb.GetPayrollReques)) {
    throw new Error('Expected argument of type hris.v1.payroll.GetPayrollReques');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hris_v1_payroll_GetPayrollReques(buffer_arg) {
  return hris_v1_payroll_payroll_pb.GetPayrollReques.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hris_v1_payroll_GetPayrollResponse(arg) {
  if (!(arg instanceof hris_v1_payroll_payroll_pb.GetPayrollResponse)) {
    throw new Error('Expected argument of type hris.v1.payroll.GetPayrollResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hris_v1_payroll_GetPayrollResponse(buffer_arg) {
  return hris_v1_payroll_payroll_pb.GetPayrollResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PayrollServiceService = exports.PayrollServiceService = {
  getPayroll: {
    path: '/hris.v1.payroll.PayrollService/GetPayroll',
    requestStream: false,
    responseStream: false,
    requestType: hris_v1_payroll_payroll_pb.GetPayrollReques,
    responseType: hris_v1_payroll_payroll_pb.GetPayrollResponse,
    requestSerialize: serialize_hris_v1_payroll_GetPayrollReques,
    requestDeserialize: deserialize_hris_v1_payroll_GetPayrollReques,
    responseSerialize: serialize_hris_v1_payroll_GetPayrollResponse,
    responseDeserialize: deserialize_hris_v1_payroll_GetPayrollResponse,
  },
};

exports.PayrollServiceClient = grpc.makeGenericClientConstructor(PayrollServiceService);
