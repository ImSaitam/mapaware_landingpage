import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
