function Header() {
  return (
  <div class="Header"><h1>Simple React Application</h1></div>
  );
}

function Content() {
  return (<div class="Content"><p>This is my first React Application, wish me luck!</p></div>);
}

function Footer() {
  return (<div class="Footer"><h1>Created by Robin.</h1></div>);
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />

    </>
  );
}

export default App;