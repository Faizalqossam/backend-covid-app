// TODO 2: SETUP ROUTING (ROUTER)
//import controller patiens
const PatiensController = require("../controllers/PatienstController")

//import express
const express = require("express")

//import validation
const { runValidation, validationCheck } = require('../validation/index');

//membuat object router
const router = express.Router()

//buat routing home
router.get("/",(req,res) => {
    res.send("Semangat UAS Projectnya..")
})

//Routing untuk pasien
router.get("/patiens",PatiensController.index)
router.post("/patiens",validationCheck,runValidation,PatiensController.store)
router.put("/patiens/:id",PatiensController.update)
router.delete("/patiens/:id",PatiensController.destroy)
router.get("/patiens/:id",PatiensController.show)
router.get("/patiens/search/:name",PatiensController.search)
router.get("/patiens/status/:status",PatiensController.searchStatus)

//export module routing
module.exports = router;
