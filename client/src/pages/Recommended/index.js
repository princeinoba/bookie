import React from "react";
import { useBooks } from "../../utils/BookContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCard from "../../components/BookCard";

function Recommended() {
  const { savedBooks } = useBooks();
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-4">Recommended Books</h1>
        </Col>
      </Row>
      <Row>
        {savedBooks.length > 0 ? (
          savedBooks.map(book => (
            <Col xs={12} key={book.booksId}>
              <BookCard book={book} />
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
}

export default Recommended;
