import reset from 'styled-reset';

import { Practice } from './components/Practice';
import { createGlobalStyle } from 'styled-components';
import { PopUp } from './components/Library/PopUp';
import { Embed } from './components/Library/Embed';
import { ModalandEmbed } from './components/Library/ModalandEmbed';

const GlobalStyles = createGlobalStyle`
${reset}

body {
  margin: 10px;
}

h3 {
  font-size: 17px;
  font-weight: 600;
  margin: 5px;
}
`;
function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <Practice /> */}
      <PopUp />
      {/* <Embed /> */}
      {/* <ModalandEmbed /> */}
    </div>
  );
}
export default App;
