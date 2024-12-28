import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyBlogDB"); // select database

//////////////////////////////////////////
// Blogs
//////////////////////////////////////////

// Get all blogs
async function getBlogs() {
  let blogs = [];
  try {
    const collection = db.collection("blogs");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    blogs = await collection.find(query).toArray();
    blogs.forEach((blog) => {
      blog._id = blog._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return blogs;
}

// Get blog by id
async function getBlog(id) {
  let blog = null;
  try {
    const collection = db.collection("blogs");
    const query = { _id: new ObjectId(id) }; // filter by id
    blog = await collection.findOne(query);

    if (!blog) {
      console.log("No blog with id " + id);
      // TODO: errorhandling
    } else {
      blog._id = blog._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return blog;
}

// create blog
async function createBlog(blog) {
  //blog.titleImage = "/images/w1/default.jpg"; // default poster
  blog.categoryCountry = [];
  blog.categoryType = [];
  blog.images = ["/images/w1/default.jpg", "/images/w1/default.jpg"];
  try {
    const collection = db.collection("blogs");
    const result = await collection.insertOne(blog);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated movie or null, if movie could not be updated
async function updateBlog(blog) {
  try {
    let id = movie._id;
    delete movie._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("movies");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: movie });

    if (result.matchedCount === 0) {
      console.log("No movie with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Movie with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete blog by id
// returns: id of the deleted blog or null, if blog could not be deleted
async function deleteBlog(id) {
  try {
    const collection = db.collection("blogs");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No blog with id " + id);
    } else {
      console.log("Blog with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
