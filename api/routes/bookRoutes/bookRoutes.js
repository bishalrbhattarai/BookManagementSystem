const { Router } = require("express");
const router = Router();
const BookCtrl = require("../../controllers/bookControllers/bookControllers.js");

const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

router.get("/", BookCtrl.index);

router.post("/:uid", upload.single("file"), BookCtrl.store);

router.patch("/:id", BookCtrl.update);

router.put("/:id", BookCtrl.update);

// router.delete('/')

module.exports = router;
