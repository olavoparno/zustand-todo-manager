import { Layout } from "./Common/Layout";
import { TodoManager } from "./Modules/TodoManager";

function App(): JSX.Element {
  return (
    <Layout>
      <TodoManager />
    </Layout>
  );
}

export default App;
