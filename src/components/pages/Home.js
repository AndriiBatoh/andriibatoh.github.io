import {useDispatch, useSelector} from "react-redux";
import Select from "../nodes/Select";
import SelectOption from "../nodes/SelectOption";
import {setSection, nextQuestion} from "../actions/actions";
import List from "../nodes/List";
import ListItem from "../nodes/ListItem";
import {initData} from "../initialData/init2";
import Button from "../nodes/Button";


const Home = () => {
    const dispatcher = useDispatch();
    const {signs, selectedSection, i18n} = useSelector(store => store);
    const availableSections = Object.keys(signs);
    const defaultState = [...initData.signs[selectedSection]];
    const section = signs[selectedSection];
    const randomIndex = Math.floor(Math.random() * section.length);
    const item = section[randomIndex];
    const answers = [{title: item.title, id: item.id}]

    const randomAnswer = () => {
        let preparedAnswers = answers.map((e) => e.id);
        let random = Math.floor(Math.random() * defaultState.length);
        console.log(defaultState);
        if(preparedAnswers.indexOf(defaultState[random].id) >= 0) {
            return randomAnswer();
        }

        answers.push({id: defaultState[random].id, title: defaultState[random].title})
    };

    for(let i = 0; i < 3; i++) {
        randomAnswer();
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    shuffle(answers);

    return (
        <section className='homepage'>
            <h2>Изучаем знаки</h2>
            <div className="switchers">
                <div>
                    <p>Раздел</p>
                    <Select name="sections" onChange={(e)=> {
                        dispatcher(setSection(e.target.value))}}>
                        {availableSections.map((key, index) => (
                            <SelectOption value={key} key={index}>{i18n[key]}</SelectOption>))}
                    </Select>
                </div>
                <div>
                    <p>Режим</p>
                    <Select name='state'>
                        <option value="default">Проверка знаний</option>
                    </Select>
                </div>
            </div>

            <div className="area">
                {Object.keys(item).length !== 0 ?
                    <div className="question">
                        <img src={item.image} alt={item.title}/>
                        <div className="hint">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <List className="answers">
                            {answers.map((e, i) => (
                                <ListItem key={i}><Button type='button' onClick={() => item.id == e.id ? alert('Верно'): alert('Не верно')}>{e.title}</Button></ListItem>
                            ))}
                        </List>
                    </div> : ''}
                <button onClick={() => dispatcher(nextQuestion(selectedSection, randomIndex))} className="next">Дальше</button>
            </div>
        </section>
    )
};

export default Home;