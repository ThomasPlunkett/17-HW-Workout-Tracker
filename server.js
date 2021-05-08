const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3001;

const app =express();

app.use(logger('dev'));
