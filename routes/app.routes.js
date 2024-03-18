module.exports = (app) => {
    const Cont = require("../controller/app.controler");
    const Mode = require("../model/app.model");

    app.post("/create", async (req, res) => {
        try {
            const user = new Mode(req.body);
            const save = await user.save();
            res.send(save);


        }
        catch(e){
            console.log("hello",e);
        }
    })
}