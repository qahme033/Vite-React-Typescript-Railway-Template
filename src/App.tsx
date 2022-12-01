import { useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import NavBar from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Page} from './schemas/schemas'

const language = "en-US"
const GET_IDEX_PAGE = gql`
    query {
        pages (filter:{id: {_eq: "index_page"}}){
            id
            translations ( filter: { languages_code: {code:{ _eq: "${language}" } }})
            {
                title
                subtitle
            }
            nav_bar {
                translations ( filter: { languages_code: {code:{ _eq: "${language}" } }})
                {
                    title
                    subtitle
                }
                menu_items {
                    icon_name
                    translations ( filter: { languages_code: {code:{ _eq: "${language}" } }})
                    {
                        name
                    }
                    drop_down_menu {
                        icon_name
                        translations ( filter: { languages_code: {code:{ _eq: "${language}" } }})
                        {
                            name
                        }
                    }
                }
            }
        }
    }
`;


function App() {
  const { loading, error, data } = useQuery<{pages: Page[]}>(GET_IDEX_PAGE);

  if (loading) return <p>Loading...</p>
  return (
    <div className="App">
      <Button >Show Toast</Button>
      <NavBar data={data!.pages[0].nav_bar[0]!}/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
