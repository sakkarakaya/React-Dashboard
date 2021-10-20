import MemberList from "./components/MemberList";
import MembersContextProvider from "./contexts/MembersContext"

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">

          <MembersContextProvider>
            <MemberList />
          </MembersContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
