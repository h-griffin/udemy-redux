# udemy - redux

## notes
- [when to use redux](notes/redux.md)
- [immutable update patterns](notes/immutable-update.md)

### useful links & resources : **basic /sync**
- [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable)
- [immutability-helper](https://github.com/kolodny/immutability-helper)
- [immutable-update-utilities](https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities)
- [Redux Addons Catalog.](https://github.com/markerikson/redux-ecosystem-links)

### useful links & resources : **advanced /asyc**
- [Middleware:](https://redux.js.org/advanced/middleware/)
- [redux-thunk](package: https://github.com/gaearon/redux-thunk)
- [Async Actions:](https://redux.js.org/advanced/async-actions)


exec file node js /console

> $ node < filepath / file name >

- [redux basics](redux-basics.js)
    - reducer 
        - only thing that can touch state
        - pure sync code only
    - store - takes reducer as input
    - subscription 
        - function executed whenever state is changed
    - dispatcher 
        - gives action type to reducer to manipulate state
        **dispatch** MUST have ```type: ``` property to give to reducer for the **type** of action

    - action creators
        - async code
        - shouldnt transform state update too much, but it can

- alternative file structure : 
    - for large apps, give a store/actions&reducer files to each container


create store when application starts - index.js

>  $ npm install --save react-redux  

**index.js**
- wrap `<App>` with ```<Provider>```to use redux with react app from `react-redux`
- pass store created with `createStore` to `Provider`


**Counter.js**
- connect 
    - returns a higher order component 
    - what slice of state and what action
- mapDispatchToProps
    - make sure reducer handles the `type` 

**reducer.js**
- handle actions to the state

- payload - adittional data passed along with action
    - value/v/val

- add results state arr

**counter.js**
- button to dispatch action to get result


**actions.js**
- store actions and export constants to prevent bugs with editor help