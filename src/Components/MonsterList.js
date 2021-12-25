import {useState, useEffect} from "react";
import {Container, Col, Row, Card, InputGroup,FormControl} from 'react-bootstrap'
import {Link,Outlet} from "react-router-dom";

const MonsterList = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const handleUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }
    useEffect(handleUser, [])
    return (
        <Container>
            <Outlet/>
            <InputGroup className={"mt-3 mb-3"}>
                <FormControl
                    placeholder="Search Monsters"
                    aria-label="Search Monsters"
                    aria-describedby="Search Monsters"
                    onChange={(event => setSearch(event.target.value))}
                />
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup>
            <Row>
                {users.filter(user=> user.name.toLowerCase().includes(search.toLowerCase())).length === 0 ? <p>there are no monsters</p> :
                    users.filter(user=> user.name.toLowerCase().includes(search.toLowerCase())).map((user) =>
                    <Col  xs={12} sm={6} md={4} lg={3} className={'mt-2 mr-1'} key={user.id}>
                        <Link to={`/Monsters/${user.id}`}>
                            <Card key={user.id} style={{width: '18rem'}}>
                                <Card.Img variant="top" src={'https://robohash.org/' + user.name}/>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>{user.email}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>)}
            </Row>
        </Container>
    )
}

export default MonsterList