// File: index.js
const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

const loadProto = (relativePath) => {
    const protoPath = path.join(__dirname, relativePath);
    const packageDefinition = protoLoader.loadSync(protoPath, options);
    return grpc.loadPackageDefinition(packageDefinition);
};

const employeePackage = loadProto('hris/v1/employee/employee.proto');
const payrollPackage = loadProto('hris/v1/payroll/payroll.proto');

module.exports = {
    employee: employeePackage.hris.v1.employee,
    payroll: payrollPackage.hris.v1.payroll,
    grpc,
    protoLoader
};