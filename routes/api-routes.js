var db = require("../models");

module.exports = function(app) {
    // get route to index
    app.get("/", function(req, res) {
        res.redirect("/");
    });

    // post route to create a new burger
    app.post("/create", function(req, res) {
        console.log(req.body);
        db.burgers.create({
            burger_name: req.body.burger,
            devoured: req.body.devoured
        }).then(function(results) {
            res.redirect("/");
        });
    });

    // put route to update a burger
    app.put("/:id", function(req, res) {
        db.burgers.update({
                devoured: true
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function(updateBurger) {
                res.redirect("/");
            });
    });
};