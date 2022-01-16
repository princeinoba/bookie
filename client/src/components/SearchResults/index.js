import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from "../BookCard";

function SearchResults({ searchResults }) {
  return (
    <Row>
      {searchResults.length > 0 ? (
        searchResults.map(book => (
          <Col xs={12} key={book.booksId}>
            <BookCard book={book} />
          </Col>
        ))
      ) : (
        <></>
      )}
    </Row>
  );
}

export default SearchResults;
