var {
    getService,
    createService,
    updateService,
    deleteService,
} = require("../controllers/Service");
var express = require("express");
var router = express.Router();

router.get("/:name", getService);
router.post("/", createService);
router.put("/:name", updateService);
router.delete("/:name", deleteService);

module.exports = router;