import express  from "express";
import mainController from "../controller/mainController.js";

 const route = express.Router();

 route.get('/books' , mainController.getAllBooks );
 route.get('/detail/:bookId' , mainController.getBookByID)
 
 route.post('/signup' , mainController.signupUser );
 route.post( '/login' , mainController.userLogin);


 export default route;