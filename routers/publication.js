var {
    getPublication,
    createPublication,
    updatePublication,
    deletePublication,
} = require("../controllers/Publication");
var express = require("express");
var router = express.Router();

router.get("/:title", getPublication);
router.post("/", createPublication);
router.put("/:title", updatePublication);
router.delete("/:title", deletePublication);

module.exports = router;