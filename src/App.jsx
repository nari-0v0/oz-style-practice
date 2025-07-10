import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </AppWrapper>

    //   <main>
    //     <Header />
    //     <section>
    //       {contents.map((el) => (
    //         <Content key={el.id} content={el} />
    //       ))}
    //     </section>
    //   </main>
  );
}

export default App;
