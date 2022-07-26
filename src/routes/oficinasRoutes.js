const controller = require('../controller/oficinasController')
const express = require('express')
const router = express.Router()

router.get("/", controller.getAllOficinas);
router.get("/:id", controller.getOficinas);
router.post("/", controller.createOfinas);
router.put("/:id", controller.updateOficinas);
router.patch("/cidade/:id", controller.updateCidade)
router.delete("/:id/", controller.deleteOficinas);

module.exports = router