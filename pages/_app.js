import '../styles/index.css';

import { TodosProvider } from '../context/TodosContext';

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </TodosProvider>
  );
}

export default MyApp;
