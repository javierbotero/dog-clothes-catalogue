import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import Clothe from '../components/Clothe';
import facebook from '../assets/images/icons/facebook.png';
import credit from '../assets/images/icons/credit.png';
import phone from '../assets/images/icons/phone.png';
import Banner from '../components/Banner';
import { FILTER } from '../constants/constants';

const App = props => {
  const clothes = useSelector(state => state.items.clothes);
  const statusItems = useSelector(state => state.items.status);
  const category = useSelector(state => state.filter);
  const [hideLoading, setHideLoading] = useState(true);
  const [home, setHome] = useState(true);
  const dispatch = useDispatch();
  const {
    retrieveItems,
    changeCategory,
    categories,
    picturesDirectory,
    objectData,
  } = props;
  useEffect(() => {
    if (statusItems === 'pending') {
      setHideLoading(false);
    }
  }, [statusItems, setHideLoading, clothes, dispatch]);
  if (statusItems === 'idle') {
    dispatch(retrieveItems(objectData));
  }
  const selectFilter = e => {
    dispatch(changeCategory(e.target.value, FILTER));
  };

  return (
    <div>
      <BrowserRouter>
        <div className={hideLoading ? 'hide' : ''}>
          Loading...
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/${Math.floor(Math.random() * clothes.length)}`}>Newest Product</Link>
            </li>
            <li>
              <Link to={`/${Math.floor(Math.random() * clothes.length)}`}>Today Product</Link>
            </li>
          </ul>
        </nav>
        <header className="degrade-banner">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to={`/${Math.floor(Math.random() * clothes.length)}`}>MORE BUYED</Link>
            </li>
            <li>
              <Link to={`/${Math.floor(Math.random() * clothes.length)}`}>DISCOUNT</Link>
            </li>
          </ul>
          <div className={`${home ? '' : 'hide'}`} id="main-banner">
            <Banner clothes={clothes} picturesDirectory={picturesDirectory} />
            <div>
              NEW WINTER
              <br />
              COLLECTION 2021
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Filter
              selectFilter={selectFilter}
              category={category}
              clothes={clothes}
              categories={categories}
              picturesDirectory={picturesDirectory}
              setHome={setHome}
            />
          </Route>
          <Route
            exact
            path="/:id"
            render={({ match }) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Clothe match={match} picturesDirectory={picturesDirectory} setHome={setHome} />
            )}
          />
        </Switch>
        <footer className="degrade-banner">
          <div className="social-media">
            <div>
              <span className="tag">Customer Service</span>
              <div>
                <img src={phone} alt="phone" className="icon" />
                <div>10005864557</div>
              </div>
            </div>
            <div>
              <span className="tag">Find us on</span>
              <div>
                <img src={facebook} alt="facebook" className="icon" />
              </div>
            </div>
            <div>
              <span className="tag">Payments</span>
              <div>
                <img src={credit} alt="credit" className="icon" />
              </div>
            </div>
          </div>
          <div className="info-links">
            <ul>
              <li>Contact us</li>
              <li>Services</li>
              <li>Policy</li>
              <li>More info</li>
            </ul>
            <ul>
              <li>Loren ipsum</li>
              <li>Some Link</li>
              <li>Warranty</li>
              <li>More about us</li>
            </ul>
            <ul>
              <li>Policy</li>
              <li>More info</li>
              <li>Some Link</li>
              <li>Warranty</li>
            </ul>
          </div>
        </footer>
        <nav>
          Powered by:
          <a href="https://javierbotero.online/">Javier Botero</a>
        </nav>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  retrieveItems: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  objectData: PropTypes.shape({
    token: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    symbolCompanies: PropTypes.arrayOf(PropTypes.string).isRequired,
    picturesDirectory: PropTypes.objectOf(PropTypes.string).isRequired,
    adjectives: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default App;
