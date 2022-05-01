# Auto Atlas
React Native automotive travel assistant application. Leverages Expo framework, Redux for state management, Tailwind React Native for styling, and Google Directions, Places, & Distance Matrix APIs

<p align="center">
  <img src="/demo/icon.png" alt="auto_atlas_icon" width="100" height="100"/>
</p>

### Try it on the Expo Store! 
https://expo.dev/@rchang0501/auto-atlas?serviceType=classic&distribution=expo-go

### About Auto Atlas
Auto Atlas is a mobile automotive travel assistant application built for both iOS and Android platforms by leveraging **React Native**. The goal of the application is to enable the user to discover transit route, time, and distance details of thier road trip by simply setting starting and ending destinations. The application is intended to be a mix of the Tesla, Uber, and Google maps mobile apps to provide a automotive-first approach to travel assistance software. Auto Atlas leverages many modern React Native development tools namely; Expo, Redux for state management, Tailwind React Native Classnames library for styling, and Google Directions, Places, & Distance Matrix APIs for robust information provision. 

### Tech Stack
**Languages**: JavaScript </br>
**Frameworks**: React Native, Expo </br>
**Libraries**: Redux, [Google Places Autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete), [React Native Maps](https://github.com/react-native-maps/react-native-maps), [Tailwind React Native Classnames](https://github.com/react-native-maps/react-native-maps) </br>
**Technologies**: Google Cloud </br>

## Side-by-Side iOS and Android Demo

### Home Screen and Google Places Autocomplete Search
The UI of Auto Atlas is inspired by a mix of the Tesla, Uber, and Google Maps mobile apps. The central text field is powered by the Google Places Autocomplete library. The home page also uses a keyboard avoiding view to push all elements upwards when the keyboard is displayed. 

![Search Home](/demo/1_search_home.gif)

### Start a Trip
The following outlines the different ways you can start a trip with Auto Atlas.

#### A) Enter your starting location to start a trip
The first way to start a trip with Auto Atlas is to enter your starting location and then press the `start a trip` button. The Google Places Autocomplete textfield demoed above stores the location details of the selected origin. Auto Atlas then redirects the user to a pin of the origin location on either **Apple Maps or Google Maps** depending on the platform OS. 

![Start Trip](/demo/2_start_trip.gif)

Alternatively the Find a charging station button can be pressed and a similar redirect will occur. 

![Find Charging](/demo/3_find_charging.gif)

#### B) Use quick start to start a trip
Auto Atlas provides quick start buttons for starting a trip to enable the user to easily set their origin to frequent locations such as home or work. Below illustrates the quick start when the `Home` button is pressed which is currently set to the CN Tower in Toronto, Ontario, Canada. 

![Quick Home](/demo/4_quick_home.gif)

Below illustrates the quick start when the `Work` button is pressed which is currently set to the University of Waterloo in Waterloo, Ontario, Canada. 

![Quick Work](/demo/5_quick_work.gif)

### Set a Destination
The following outlines the different ways you can set a destination with Auto Atlas.

#### A) Enter your destination location 
The first way to set your destination with Auto Atlas is to enter the destination name. The textfield is powered by the same Google Places Autocomplete component in the home screen. Below illustrates this process for starting at the Universtiy of Waterloo and setting the destination location to Boston, MA, USA.

![Go to Boston](/demo/6_boston.gif)

Below illustrates the process of starting at the University of Waterloo and changing the destination location from Boston, MA, USA to California, USA.

![Go to California](/demo/7_cali.gif)

#### B) Use pinned destinations 
Like the quick start buttons in the home screen, Auto Atlas provides pinned destinations on the map screen to enable the user to easily set their destination to frequent locations such as home or work. Below illustrates this process when the `Home` button is pressed. 

![Go back home](/demo/8_back_home.gif)

### Navigation Details 
As you may have noticed, once both the origin and destination loctations have been set, Auto Atlas will provide navigation details for the trip. The nav details card displays two critical trip details; the travel distance and the travel duration. These figures are fetched from the Google Maps Distance Matrix API and managed using Redux. 

Further more, in the top right corner, the nav details card displays the current time as the departure time. This is changed dynamically using React's useState and useEffect hooks. 

The nav details card can also be hidden and shown by the user by pressing the corresponding buttons. Whenever the user wants to type in a different destination, the nav details card is hidden automatically to enhance UX. 

![Nav Details](/demo/9_hide_details.gif)






