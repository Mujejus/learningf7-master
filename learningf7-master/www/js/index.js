var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/page2/',
      url: 'pages/page2.html',
    },
    {
      path: '/GymBeats/',
      url: 'pages/GymBeats.html',
    },
    {
      path: '/bass/',
      url: 'pages/bass.html',
    },
  ],
  });
var mainView = app.views.create('.view-main')