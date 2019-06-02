Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const application_server_1 = require("./application-server");
const applicationServer = new application_server_1.ApplicationServer(express());
const server = applicationServer.prepareServer();
applicationServer.start(server);
