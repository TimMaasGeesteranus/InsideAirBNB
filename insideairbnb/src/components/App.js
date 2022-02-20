import { AuthProvider } from 'oidc-react/build/src/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import Container from './Container/Container';
import Header from './Header/Header';

function App() {

  const config = {
    clientId: "interactive",
    clientSecret: "SuperSecretPassword",
    automaticSilentRenew: true,
    responseType: 'code',
    scope: "openid profile",
    redirectUri: 'http://localhost:3000',
    authority: 'https://localhost:3004',
    onBeforeSignIn: () => {
      console.log("before");
    },
    onSignIn: () => {
      console.log("login");
    },
    onSignOut: () => {
      console.log("logout");
    },
  }


  return (
    <div className="App">
      <AuthProvider {...config}>
        <BrowserRouter>
          <Header />
          <Container />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
