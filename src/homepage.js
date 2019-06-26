import React from 'react';
import {Link} from 'react-router-dom';
import pic from './files/cover.jpg';

const Styles = {
      backgroundColor: '#5F86A9',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      textDecoration: 'none'
}

class HomePage extends React.Component {
  render(){
    return(
      <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h1>Blog App</h1>
              <Link to={'/blogs'}>
                    <h1>view blogs</h1>
              </Link>
          </div>

          <img
              src={pic}
              alt="Home Cover"
              style={{width: '100%', objectFit: 'cover'}}
          />
      </div>
    );
  }
}


export default HomePage;
