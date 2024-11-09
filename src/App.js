function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content() {
  return (<p>This is my first React Application, wish me luck!</p>);
}

function Footer() {
  return (<h1>Created by Robin.</h1>);
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