import React from "react";
import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import WordSearch from "./components/WordSearch/WordSearch";
import Result from "./components/Result/Result";
import useDebounce from "./hooks/useDebounce";

const ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [payload, setPayload] = React.useState({});
  const [payloadReceived, setPayloadReceived] = React.useState(false);
  const [status, setStatus] = React.useState("idle");
  const debouncedValue = useDebounce(searchTerm, 500);

  async function fetcher(searchTerm) {
    const query = ENDPOINT + searchTerm;

    const response = await fetch(query);

    const data = await response.json();

    if (data[0]) {
      setStatus("success");
    } else {
      setStatus("error");
    }
    return data;
  }

  React.useEffect(() => {
    async function fetchData() {
      if (debouncedValue) {
        const data = await fetcher(debouncedValue);

        setPayload(data);
        setPayloadReceived(true);
      }
    }
    fetchData();
  }, [debouncedValue]);

  React.useEffect(() => {
    if (searchTerm === "") setStatus("idle");
  }, [searchTerm]);

  async function onChange(event) {
    event.preventDefault();
    setStatus("loading");
    setSearchTerm(event.target.value);
    setPayloadReceived(false);
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />

      <main>
        <WordSearch
          searchTerm={searchTerm}
          onChange={onChange}
        />
        <Result
          payload={payload}
          payloadReceived={payloadReceived}
          status={status}
          searchTerm={searchTerm}
        />
      </main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  inline-size: clamp(20.44rem, calc(11.41rem + 38.5vw), 46.06rem);
  margin-inline: auto;
  margin-block: var(--size-m);
`;
