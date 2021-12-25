import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {Card, Col} from "react-bootstrap";

const handleChange = (id, cb) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => cb(data));
}

const getMonster = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    return (data)
}

const MonsterPage = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [monster, setMonster] = useState({
        id: 1,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    useEffect(() => {
        setLoading(true)
        handleChange(params.MonsterId, setMonster)
        setTimeout(()=>{setLoading(false)},2000)
    }, [params.MonsterId])
    // useEffect(() => {
    //     setLoading(true)
    //     getMonster(params.monsterID).then(data => {
    //         setMonster(data)
    //         setLoading(false)
    //     })
    //     console.log()
    // }, [params.monsterID])
    return (
        <Col xs={12} sm={6} md={4} lg={3} className={'mt-2 mr-1'}>
            {
                loading ? <h1>please wait I am loading...!</h1> : <Card key={monster.id} style={{width: '18rem'}}>
                    <Card.Img variant="top" src={'https://robohash.org/' + monster.name}/>
                    <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Text>{monster.username}</Card.Text>
                        <Card.Text>{monster.email}</Card.Text>
                        <Card.Text>{monster.phone}</Card.Text>
                        <Card.Text>{monster.website}</Card.Text>
                    </Card.Body>
                </Card>
            }
        </Col>
    )
}

export default MonsterPage