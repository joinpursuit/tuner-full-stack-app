const checkArtist = (req, res, next) => {
     if (req.body.artist) {
       console.log("WHAT IS THISONE Artist____")
       next();
     } else {
       res.status(400).json({ error: "Artist is required" });
     }
   };
   const checkBoolean = (req, res, next) => {
     const { is_favorite } = req.body;
     if (
       is_favorite == "true" ||
       is_favorite == "false" ||
       is_favorite == true||
       is_favorite == false ||
       is_favorite == undefined
     ) {
       next();
     } else {
       res.status(400).json({ error: "is_favorite must be a boolean value" });
     }
   };
   const validateURL = (req, res, next) => {
     if (
       req.body.url.substring(0, 7) === "http://" ||
       req.body.url.substring(0, 8) === "https://"
     ) {
       return next();
     } else {
       res
         .status(400)
         .json({ error: `You forgot to start your url with http:// or https://` });
     }
   };
   module.exports = { checkBoolean, checkName, checkArtist, validateURL };