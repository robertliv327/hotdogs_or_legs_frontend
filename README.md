# Hotdog or Legs Classifier Frontend

http://hotdogs-or-legs.surge.sh/

A simple React/NodeJS app that uses an IBM Watson Visual Recognition model to classify whether an image is of hot dogs or legs. The inspiration for this was a social media trend a few years ago where people on the beach would post pictures of their tanned legs and ask their followers if the picture was of "hotdogs or legs". I figured this would be a pretty funny classifier that could also be pretty pretty difficult as many examples are hard for even a human to classify.

### The model
With the help of a Chrome extension that downloaded all results from a Google images search, I chose about 750 pictures total - around 250 pictures of hotdogs, about 250 pictures of legs, and about 250 negative pictures of beaches, hamburgers, arms, etc. I tried to use as many pictures as possible from the social media trend of hotdogs posed as legs and of legs posed as hotdogs, but eventually I had to just grab generic pictures of human legs and hotdogs. I trained the model within the IBM Watson Studio.

### The app
After training the model, I decided that I wanted to make a website where users could copy and paste image urls into the classifier. To do this, I built a React frontend and NodeJS backend. The frontend accepts image urls, displays the selected image to the user, sends the image url as a request to the backend, receives the results, and displays them to the user. The NodeJS backend server takes in the request, uses Watson's Node SDK to hit my classifier, and returns the result to the frontend. I then went ahead and deployed the backend to Heroku and the frontend to Surge. Check it out at http://hotdogs-or-legs.surge.sh/
