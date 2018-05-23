import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => registerServiceWorker())
  .catch(err => console.log(err));


function registerServiceWorker() {
  if (environment.production) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then((reg) => {
          const installing = reg.installing;
          if (!navigator.serviceWorker.controller) {
            return;
          }
          if (reg.waiting) {
            updateReady(reg.waiting);
          }
          if (reg.installing) {
            updateReady(reg.installing);
            return;
          }
          reg.addEventListener('updatefound', function () {
            console.log('Actualización encontrada');
            updateReady(reg.installing);
          });

          // reg was successful
          console.log('ServiceWorker reg successful with scope: ', reg.scope);
        }).catch(function (err) {
          // reg failed :(
          console.log('ServiceWorker reg failed: ', err);
        });
        return;
      });
    }
  }
}

function updateReady(worker) {
  if (worker.state === 'installed') {
    console.log('New version Available');
    showToast();
    sendSkipWaiting(worker);
  }
  worker.addEventListener('statechange', () => {
    console.log('Escuchando cambios');
    switch (worker.state) {
      case 'installed':
        console.log('New version Available');
        showToast();
        window['updateAvailabl'] = true;
        console.warn('Check Variable');
        sendSkipWaiting(worker);
    }
  });
}

function showToast() {
  document.body.innerHTML += `<div id="snackbar">
  <div class="symbol">⚠</div>
  New Version Available
  <br> Press <span class="here">here</span> to download it
  </div>`;
  const x = document.getElementById('snackbar');
  x.className = 'snackbar show';
}

function sendSkipWaiting(worker) {
  const x = document.getElementById('snackbar');
  x.addEventListener('click', () => {
    worker.postMessage({ action: 'skipWaiting' });
    window.location.reload(true);
  });
}
