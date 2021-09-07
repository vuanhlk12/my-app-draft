import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as serviceWorker from './serviceWorker';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('../firebase-messaging-sw.js')
//     .then(function (registration) {
//       console.log('Registration successful:', registration.scope);
//     })
//     .catch(function (err) {
//       console.log('Service worker registration failed, error:', err);
//     });
// }

const showNotificationSocket = () => {
  navigator.serviceWorker.ready.then((registration) => {
    let bodyMessage = '';

    if (registration && registration.showNotification) {
      registration.showNotification('Có tin nhắn mới', {
        body: bodyMessage,
        icon: '',
      });
    }
  });
};

function askForNPerm() {
  Notification.requestPermission(function (result) {
    console.log('User choice', result);
    if (result !== 'granted') {
      console.log('No notification permission granted!');
    } else {
      console.log('123');
      showNotificationSocket(); // Write your custom function that pushes your message
    }
  });
}

//askForNPerm();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.register();
