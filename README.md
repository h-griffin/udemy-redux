# udemy - redux


exec file node js

> $ node < filepath / file name>

- [redux basics](redux-basics.js)
    - reducer 
        - only thing that can touch state
    - store - takes reducer as input
    - subscription 
        - function executed whenever state is changed
    - dispatcher 
        - gives action type to reducer to manipulate state


    **dispatch** MUST have ```type: ``` property to give to reducer for the **type** of action



create stpre when application starts - index.js

>  $ npm install --save react-redux  

**index.js**
- wrap `<App>` with ```<Provider>```to use redux with react app from `react-redux`
- pass store created with `createStore` to `Provider`

