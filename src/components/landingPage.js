import Footer from './footer';
import Header from './header';
import Main from './main';

export default function LandingPage() {
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