const Item = require("../models/Item")

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }, 
    getFeed: async (req, res) => {
        try {
          const items = await Item.find().sort({ createdAt: "desc" }).lean();
          res.render("index.ejs", { items: items });
        } catch (err) {
          console.log(err);
        }
      },
}