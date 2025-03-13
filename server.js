import express from "express"
import { MongoClient } from "mongodb"

const PORT = process.env.PORT
const URL = process.env.URL
const app = express();
const dirname = import.meta.dirname;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs")


async function connectToDb() {
  try {
    const client = await MongoClient.connect(URL);
    const db = client.db('movieApp');
    const movies = db.collection('movies');
    console.log('connected to the db');
    
    return movies
  } catch(err) {
    console.error(err);
  }
}


function createServer(movies) {


  
  // ROUTES 
  app.get('/', async(req, res) => {
    try {
      const moviesList = await movies.find().toArray();
      // console.log(movies);
      res.render('index.ejs', {movies: moviesList})
    } catch(err){
      console.log('nop')
    }
  });
  
  app.post('/addMovie', (req, res) => {
    const nameMovie = req.body.name;
    const genreMovie = req.body.genre;

    //db.collection('movieApp)
    movies.insertOne({
      name: req.body.name,
      genre: req.body.genre,
    })
  
  
    res.redirect('/');
  
  })

  
  app.listen(PORT, () => {
    console.log("listeting")
  });
}

async function main(){
  try {
    const movies = await connectToDb();
    createServer(movies);
  } catch(err){
    console.error(`Failed: ${err}`);
  };
};

main();