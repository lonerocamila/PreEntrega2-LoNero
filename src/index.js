import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import firebaseConfig from './firebase-config';
import {

    FirebaseAppProvider
} from 'reactfire'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={"Conectando la app..."}> 
      
    <App />
    
     </Suspense>
    </FirebaseAppProvider>
  
);
