import React, { useState, useEffect } from "react";
import { useBooks } from "../../utils/BookContext";
import Container from "react-bootstrap/Container";
import SearchBooks from "../../components/SearchBooks";
import SearchResults from "../../components/SearchResults";
import { markSearchSaved } from "../../utils/formatter";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const { savedBooks } = useBooks();

  useEffect(() => {
    setSearchResults(prevState => markSearchSaved(savedBooks, prevState));
  }, [savedBooks]);

  return (
    <Container>
      <SearchBooks
        setSearchResults={setSearchResults}
        savedBooks={savedBooks}
      />
      <SearchResults searchResults={searchResults} />
    </Container>
  );
}

export default Search;
