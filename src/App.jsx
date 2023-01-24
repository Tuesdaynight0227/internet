function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Comic Sans MS", fantasy', color: '#4b9be1' }}>    
      {"Tuesdaynight's website"}           </h1>
      
      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <h3
        style={{
          fontFamily: 'Comic Sans MS',
          color: '#44d60f',
          marginBottom: '6rem'
        }}
      >
        Check this out! www.twin-kle.com 
      </h3>

      <button
        style={{
          fontFamily: 'fantasy',
          padding: '1rem',
          fontSize: '2rem',
          background: '#0ed8e3',
          color: 'black'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'fantasy',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'black',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
