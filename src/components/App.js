import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Perfil from './perfil';
//import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import TextDavinci from './openai/TextDavinci';
import ImageDalle from './openai/ImageDalle';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
           <Route path="/login" element={<Login/>} />
           <Route path='/davinci' element={<TextDavinci/>} />
           <Route path="/imagesIA" element={<ImageDalle/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;