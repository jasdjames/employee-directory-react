import { NavBar, Table } from './components';

export const App = () => {
  return (
    <>
      <div className="App">
        <h1 className="text-center text-success m-3">Employee Directory </h1>
      </div>
      <div className="text-center"> Header </div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Table></Table>
      </div>
    </>
  );
};
