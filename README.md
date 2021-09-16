<p align="center">h
   <img width="800" height="300" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%204.png">   
</p>

# Mapping_Earthquakes

## Overview
In this module, we used the Leaflet.js Application Programming Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. Each earthquake was visually represented by a circle and color, where a higher magnitude has a larger diameter and is darker in color. In addition, each earthquake has a popup marker that, when clicked, shows the magnitude of the earthquake and the location of the earthquake.

##  Resources
We used the Leaflet library to plot the data on a Mapbox map through an API request and created interactivity for the earthquake data. We added the USGS URL for earthquake data by navigating to the USGS Hazards Program, clicking the Earthquakes link to open the Real-time Data Feeds link and scrolled down to "GeoJSON Summary" Feed. There, we clicked the All Earthquakes link under the “Past 7 Days” heading
      
Data Source: majorAirports.json, torontoRoutes.json, torontoNeighborhoods.json, tectonic_plate_starter_logic.js, tectonic_plate_starter_logic.js,                           tectonic_plate_starter_logic.js and index.html

Software: JS, D3, Leaflet, JavaScript, JSON, GeoJSON and IO (Web Server)
          ES6+, ECMAScript and Visual Studio Code 1.50.0
       
##  Objectives

   •	Create a branch from the master branch on GitHub.
   •	Add, commit, and push data to a GitHub branch.
   •	Merge a branch with the master branch on GitHub.
   •	Retrieve data from a GeoJSON file.
   •	Make API requests to a server to host geographical maps.
   •	Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
   •	Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
   •	Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
   •	Render maps on a local server.
    
##  Summary

     Step 1.  Maps all recorded earthquakes in the past seven days.  
     
<p align="center">
       <img width="400" height="200" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%205.png">   
</p>

     Step 2.  As a first step in making the earthquake data more visually appealing, we added some styling to the earthquake data in 
              step 2 and varied the radius of each earthquake based on the magnitude.  
     
<p align="center">
   <img width="400" height="200" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%206.png">   
</p>
 
     
     Step 3.  Although, the size of the earthquake data based on magnitude looks great, it’s hard to tell the difference between 
              earthquakes within the same area. We come up with the idea to color-code the earthquakes based on magnitude. We, 
              also, added the magnitude and location as a popup for each earthquake in step 3.  

<p align="center">
   <img width="400" height="200" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%207.png">   
</p>

     Step 4.  The map has the earthquake data as an overlay on both the Streets and Satellite tile layers,
              so users can turn the data on and off.

<p align="center">
   <img width="400" height="200" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%208.png">   
</p>


     Step 5.  In addition to developing lines between coordinates as well as other activities, we also mapped
              neighborhood boundaries that were shaped like polygons.
     
<p align="center">
   <img width="400" height="200" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%201%20polygon.png">   
</p>


##  Challenge:  

####  Add Tectonic Plate Data  

<p align="center">
   <img width="600" height="400" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%209.png">   
</p>


#### Add Major Earthquake Data 

<p align="center">
   <img width="600" height="400" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%2012.png">   
</p>


#### Add an Additional Maps 

<p align="center">
   <img width="600" height="400" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%2013.png">   
</p>

Final:
<p align="center">
   <img width="600" height="400" src="https://github.com/jacquie0583/Mapping_Earthquakes/blob/main/image%203%20final%20product.png">   
</p>
