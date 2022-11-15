import Card from 'react-bootstrap/Card';


const ResultCard = (item) => {
  console.log(item)
  return (
    <div>
        <Card>
          <Card.Body>{item.item.name} - {item.item.percentage} and {item.item.correctCount} correct from {item.item.totalCount} quetions.</Card.Body>
        </Card>
    </div>
    
  );
}

export default ResultCard;