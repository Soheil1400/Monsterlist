import {useEffect} from "react";
import {MonsterList, MonsterPage, Menu} from './Components'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    useEffect(() => {
        document.title = 'Monsters'
    }, [])
    return (
        <div className={'App'}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Menu/>}>
                        <Route index element={<div>Welcome To Monsters Site</div>}/>
                        <Route path={'/Monsters'} element={<MonsterList/>}/>
                        <Route path={'/Monsters/:MonsterId'} element={<MonsterPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
