// Return anything that has the letter "x"
Thing.find({ key: new RegExp("x") });

// Return anything that contains "ar"
Thing.find({ key: new RegExp("ar") });

// Return anything that starts with "the"
Thing.find({ key: { $regex : /^the/ } });

// Return anything that ends with "ed"
Thing.find({ key: { $regex: "ed$" }});