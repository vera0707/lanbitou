import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/common/header";
import styles from "./styles/core.less";

class Main extends React.Component{

   constructor(props){
       super(props);
   }

   render(){
      return(
          <Header />
      )
   }
}

ReactDOM.render(
   <Main />,
   document.getElementById("lbt")
);
