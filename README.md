Access this website from the below url:
https://esmartcoder.web.app/

### Development

- `npm run start`
- in your browser [http://localhost:4200](http://localhost:4200)

### Compilation

- `npm run build` ( without SSR)
- `npm run build:ssr` ( with SSR)

### Production

- `npm run serve:ssr`
- in your browser [http://localhost:4000](http://localhost:4000)

# Firebase Deployment:

npm run build:ssr

firebase init

folder location: dist/esmartcoder/browser

firebase deploy

# ISSUES:

1. While running npm i if you face below issue: Unhandled rejection Error: EACCES: permission denied, mkdir
   SOLUTION:
   sudo chown -R $(whoami) ~/.npm

2. Error: Failed to get Firebase project esmartcoder. Please make sure the project exists and your account has permission to access it.
   SOLUTION: logout and login

https://github.com/bezkoder/angular-10-firebase-crud
