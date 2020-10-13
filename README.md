### Development
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

Firebase Deployment:
====================
npm run build:ssr

firebase init

folder location: dist/esmartcoder/browser

firebase deploy

ISSUES:
======
1. While running npm i if you face below issue: Unhandled rejection Error: EACCES: permission denied, mkdir
Solution:
=========
sudo chown -R $(whoami) ~/.npm


https://github.com/bezkoder/angular-10-firebase-crud