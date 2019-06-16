# RIAK Vuex Stock Assessment

This app demonstrates the use of Vuex with IndexedDB.

## Project Specs

I'm continue from the existing project from https://github.com/kuriakinzeng/vuex-stock, all complicated code blocks are very well commented, all additional code are also commented with JSDoc format.

**NOTE:** Please note that I never use Vue before. So I work on this while learning about Vue.

### The folder structure:
- **api** - contains the resource api.
- **assets** - contains static file needed by the app.
- **components** - contains all the component needed by route and reusable components.
- **store** - contains all vuex modules to manage app state.

### Main npm libraries used:
(_As mentioned in the `package.json`_)
- `"chartist": "^0.11.2"`, Simple responsive chart
- `"chartist-plugin-legend": "^0.6.2"`, Implements a legend for Chartist charts.
- `"vlf": "^1.0.5"`, A Vue plugin from localForage.vue-localForage or vlf
- `"vue": "^2.2.1"`, The Progressive JavaScript Framework
- `"vue-js-modal": "^1.3.31"`, Simple to use, highly customizable, mobile-friendly Vue.js 2.0+ modal with SSR support. http://vue-js-modal.yev.io/
- `"vue-resource": "^1.3.1"`, The HTTP client for Vue.js.
- `"vue-router": "^2.5.3"`, Vue Router is the official router for Vue.js.
- `"vuedraggable": "^2.21.0"`, Vue drag-and-drop component based on Sortable.js
- `"vuex": "^2.3.1"` Vuex is a state management pattern + library for Vue.js applications.

### User Stories Checks List
- [x] As a user, I can view either Portfolio or Stocks each by itself
- [x] As a user, I can open a new grid so that I can view Portfolio and Stocks together
- [x] As a user, I can view a list of stocks (and their prices) that I can buy under Stocks
- [x] As a user, I can view a list of stocks that I own and their values
- [x] As a user, I can drag a stock from Stocks grid to Portfolio grid to buy the stock
- [x] As a user, I can drag a stock from Portfolio grid to Stocks grid to sell the stock
- [x] As a user, I can simulate the stock price movement and see my new portfolio value by clicking End Day
- [x] As a user, I can save my portfolio and load it back after a refresh
- [ ] As a user, I can see tweets about each stock in the list of stocks I can buy

### Features
- Portfolio page `/portfolio`. Related with user stories #1
- Stocks page `/stocks`. Related with user stories #1
- Stock detail page `/stock/:id`. Related with user stories #1
- Add new stock in stock page. Related with user stories #2
- Split view page `/split`. **We can do drag & drop to buy and sell stock in this page**, Related with user stories #2, #5, #6
- All stocks movement charts. click `End Day` in the top bar. Related with user stories #7
- Persist to `IndexedDB`. the data will still be there although the browser refreshed. Related with user stories #8
#### Additional features
- Mini chart in each stock panel, watch stock movement without go to another page.
- All stocks movement **charts** when click `End day`.
- Fix some css style misalignment.
- 

## Docs

Live (sandboxed) version available on https://loz60.codesandbox.io/

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

PS: All new added code are well commented, if something is still not understandable, please let me know.
