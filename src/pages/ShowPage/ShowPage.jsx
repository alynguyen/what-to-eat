import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card, Section } from 'react-bulma-components';


const Show = (props) => {
  return (
    <div>
      <Navbar 
        handleLogout={props.handleLogout}
        user={props.data.name}
        />
      <Section>
      <div className="container">
        <div className="card-header">
          <h1 className="title">
            {props.data.name}
          </h1>
          </div>
        </div>
        </Section>
      </div>
  );
}

export default Show;
