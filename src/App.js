import {Button, Card} from 'react-bootstrap'
import './App.css';
import Header from './Header/Header';
import TopHeadline from './TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/ZVJF0R5/Mustafizur-Rahman.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
