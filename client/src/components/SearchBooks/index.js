import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { markSearchSaved } from "../../utils/formatter";
import { searchBooks } from "../../utils/API";
import "./style.css";

function SearchBooks({ setSearchResults, savedBooks }) {
  const [err, setErr] = useState("");
  const searchInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const toSearch = searchInput.current.value.trim();
    if (!toSearch) {
      return setErr("Can't submit an empty book title.");
    }

    searchBooks(toSearch).then(results => {
      setErr("");
      setSearchResults(markSearchSaved(savedBooks, results));
    });
  };

  return (
    <>
      <Row className="mt-4 mb-4">
        <Col className="d-md-flex flex-row align-items-end">
          <h1 className="mb-0 mr-4 mb-1 mb-md-0">Search for</h1>
          <Form onSubmit={handleSubmit} className="flex-grow-1">
            <Form.Group controlId="search-input" className="mb-0">
              <InputGroup id="search-input-group">
                <Form.Control
                  aria-label="Book search input"
                  type="text"
                  placeholder="Book title"
                  ref={searchInput}
                />
                <InputGroup.Append>
                  <Button
                    variant="primary"
                    type="submit"
                    id="search-button"
                    title="Submit your search"
                  >
                    <i className="fas fa-search mr-2" aria-hidden="true"></i>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {err ? (
        <Row className="pb-3">
          <Col>
            <Alert variant="danger">{err}</Alert>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchBooks;
