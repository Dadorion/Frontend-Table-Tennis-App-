import './App.css';
import Footer from '../src/UI/Footer/Footer';
import Content from './UI/content/Content';
import HeaderContainer from './UI/Header/HeaderContainer';

function App(props) {
  return (
    <div className="App">

      <div className='black_hat'>black hat</div>

      <HeaderContainer />
      <Content store={props.store}/>
      <Footer />

      <div className='white_line'/>

    </div>
  );
}

export default App;
