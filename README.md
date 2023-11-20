# Travel Journal
 This an overview of a travel journal experince built using React. It displays the site image, the location, the description and the planned dates for the visit.

 ## Author
 Developed by Elisha Kibet

 ## Setup
 To get the web app running; 
 - Fork/Clone/Download the project
 - changed directory to this particular project directory
 - Run `npm install` to install dependencies
 - Run `npm run dev` to launch the app on localhost port
 
 ### Screenshot
 ![Preview of the airbnb webapp](./public/images/travel-journal-screenshot.png)

 ## Functionality
 The "main.jsx" renders the "app component" where the app component is responsible for rendering the "navbar and card sections". The app component "App.jsx" being the parent component to both the Nav and Card components, can have properties (props) that can be passed to its child components. The use of props; 
 - facilitates the aspect of resusability of components in that we can build one card component and pass in props to renders multiple instances of the card.
 - Enable use of dynamic data; in our project we obtain data fro "data.js" file, which are array of objects, hence the data can act as props to specfic components.

 For this project we export the data from "data.jsx" in our app component and then use map() method to iterate on individual array elements. The individual array elements are "objects", and we therefore pass in the "objects" values as props in our card component.

```javascript
 const cardData = dataFile.map(function(data){
    return <Card 
              key={data.id}
              {...data}
    />
```
We store it in "cardData" variable and is rendered as jsx in our app return segment
```javascript
return (
    <div className="main-div">
      <Navbar />
      {cardData}
    </div>
  )
```

The styling for the app is done in the "styles.css" file.

