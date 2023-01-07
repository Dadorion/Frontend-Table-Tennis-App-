import './App.css';
import Header from '../src/UI/Header/Header';
import Footer from '../src/UI/Footer/Footer';
import Content from './UI/content/Content';

function App(props) {
  return (
    <div className="App">

      <div className='black_hat'>black hat</div>

      <Header />
      <Content store={props.store}/>
      <Footer />

      <div className='white_line'/>

    </div>
  );
}

export default App;
