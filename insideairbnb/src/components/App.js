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
    scope: "openid profile roles",
    redirectUri: 'https://insideairbnbreactapp.azurewebsites.net',
    authority: 'https://insideairbnbidentity20220314204820.azurewebsites.net/',
    loadUserInfo: true,
    autoSignIn: false,
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
