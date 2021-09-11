/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const element = React.createElement('h1', null, 'Hello World');

// console.log(element);

// const element2 = <h1>Hello World </h1>;

// console.log(element2);

// function getGreeting(user) {
//     if (user) {
//         return <h2>Hello {user} </h2>;
//     }
//     return <h1>Hello, Stranger</h1>;
// }

// const element3 = <h1>Hello {getGreeting('Mr Mostafij')}</h1>;
// console.log(element3);

// const element4 = (
//     <h1 className="heading" tabIndex="index">
//         <span className="text"> Hello World</span>
//         <img src="" alt="IMG" />
//     </h1>
// );

/*
element4 = {
    type : 'h1',
    props:{
        className: 'heading',
        tabIndex: 0,
        children: [
            {
                type:'span',
                props:{
                    className:'text',
                }
            },
            {
                type:'img'
                props:{
                    src:''
                }
            }
        ]
    },
}
*/
// console.log(element4);
// const element5 = (
//     <h1 className="heading" tabIndex="index">
//         <span className="text"> Hello World</span>
//         <img src="" alt="IMG" />
//     </h1>
// );

// console.log(element5);

// ReactDOM.render(element5, document.getElementById('root'));
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
// reportWebVitals();
// const element = React.createElement('h1', null, 'Hello World');

// JSX and Rendering Elements
// const element = <h1>Hello World</h1>;

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {user}</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// console.log(getGreeting('Mostafij'));
// const element2 = <h1>Hello {getGreeting('user')}</h1>;
// console.log(element2);
// console.log(element);
// const element3 = (
//     <h1 className="heading" tabIndex={indexedDB}>
//         <span className="text"> Hello MR </span>
//         <img src="" alt="" />
//     </h1>
// );
// console.log(element3);
// ReactDOM.render(element3, document.getElementById('root'));
// ReactDOM.render(element2, document.getElementById('root2'));
// const index = 0;

// setInterval(() => {
//     const element4 = (
//         <h1 className="head" tabIndex={indexedDB}>
//             <span className="myClass">Hello {new Date().toLocaleTimeString()}</span>
//             <img src="" alt="" />
//         </h1>
//     );
//     ReactDOM.render(element4, document.getElementById('root2'));
// }, 1000);

// Compomemts and Props
// function Clock({ locale }) {
//     return (
//         <h1 className="head" tabIndex={indexedDB}>
//             <span className="myClass">Hi {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" alt="" />
//         </h1>
//     );
// }
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root3'));

// eslint-disable-next-line react/prefer-stateless-function
// class Clocks extends React.Component {
// eslint-disable-next-line class-methods-use-this
//     render() {
//         return (
//             <h1 className="head">
//                 <span className="myClass">
//                     New Clock {this.props.children}{' '}
//                     {new Date().toLocaleTimeString(this.props.locale)}
//                 </span>
//             </h1>
//         );
//     }
// }

// const ClocksComponent = new Clocks();
// ReactDOM.render(<Clocks locale="bn-BD"> Created </Clocks>, document.getElementById('root4'));

// State & Lifecycle in Class Component

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root4')
);

reportWebVitals();
