// -------------------------------
/******   IMPORT MODULES   ******/
const express = require('express');
const routes = new express.Router();

const Obra = require('./controller/Obra');


/****************************/
//
//      SERVICES Obra
//
/****************************/
routes.post("/obra/save",     Obra.save);
routes.post("/obra/update",   Obra.update);
routes.post("/obra/list",     Obra.list);
routes.get("/obra/list",     Obra.list);
routes.post("/obra/list/:id", Obra.listOne);
routes.post("/obra/delete",   Obra.delete);



module.exports = routes;