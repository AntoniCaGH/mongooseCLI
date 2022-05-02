require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie } = require("./movie/methods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            // add movie function that takes yargsObj terminal input
            await addMovie({ 
                title: yargsObj.title, 
                actor: yargsObj.actor,
                year: yargsObj.year,
                genre: yargsObj.genre,
                rating: yargsObj.rating
             });
            console.log(`Successfully added ${yargsObj.title} (${yargsObj.year})`);
        } else if (yargsObj.list) {
            // list movies from database
        } else if (yargsObj.update) {
            // update movies with filterObj and updateObj
        } else if (yargsObj.delete) {
            // delete movie with filterObj
        } else {
            console.log("Incorrect Command");
        }
        await mongoose.disconnect()
    } catch (error) {
      console.log(error);
    }
};

app(yargs.argv)

// node src/app.js --add --title="Big Daddy" --year=1999