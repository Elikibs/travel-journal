# Travel Journal
 This an overview of a travel journal experince built using React. It displays the site image, the location, the description and the planned dates for the visit.

 ## Author
 Developed by Elisha Kibet

 ## Setup
 To get the web app running; 
 - Fork/Clone/Download the project
 - changed directory to this particular project directory
 - Run ==npm install== to install dependencies
 - Run ==npm run dev== to launch the app on localhost port
 
 ### Screenshot
 ![Preview of the airbnb webapp](/images/travel-journal-screenshot.png)

 ## Functionality
 The "main.jsx" renders the "app component" where the app component is responsible for rendering the "navbar, hero and card sections". The App component being the parent component to; navbar and card components, it posses properties, better still "props", that are, for this case, passed to the card component. The props are being obtained as array of data from "data.js" file.
"props' are helpful as they easen the usage of dynamic data and facilitates reusability concepts.
The stying for the app are done in the "styles.css" file.

