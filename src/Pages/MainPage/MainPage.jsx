import React,{useState,forwardRef} from 'react';
import s from './MainPage.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Collapse, Checkbox, Row } from 'antd';
const { Panel } = Collapse;
export const MainPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    const onChange = (key) => {
        console.log(key);
    };
    const onChange_checkbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className={s.container}>
            <div className={s.header}>
                <img src={require("./image_1.png")}/>
                <div className={s.text}><p className={s.about_text}>Главный экран</p></div>
            </div>
            <div className={s.legend}><img src={require("./legend_all.png")}/></div>
            <div className={s.wrapper}>
                <div className={s.container_card}>
                    <div className={s.header_container}><p className={s.text_card}>Агломашина №1</p></div>
                    <div className={s.cards_container}>
                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер У-171</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №47к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>12 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер У-172</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №35к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>10 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                    </div>
                </div>

                <div className={s.container_card}>
                    <div className={s.header_container}><p className={s.text_card}>Агломашина №2</p></div>
                    <div className={s.cards_container}>
                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер X-171</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №31к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>13 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер X-172</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №35к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>18 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                    </div>
                </div>

                <div className={s.container_card}>
                    <div className={s.header_container}><p className={s.text_card}>Агломашина №3</p></div>
                    <div className={s.cards_container}>
                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер Ф-171</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №43к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>14 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                        <div className={s.card}>
                            <div className={s.header_card}>
                                <img src={require("./red.png")}/>
                                <p className={s.text_header_card}>Эксгаустер Ф-172</p>
                                <button className={s.button_header}></button>
                            </div>
                            <div>
                                <div className={s.data_container}>
                                    <a className={s.about_text}>Ротор №95к</a>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </div>
                                <div className={s.title}>
                                    <img src={require("./Title.png")}/>
                                </div>
                            </div>
                            <div className={s.change}>
                                <a className={s.about_text}>3 сут </a>
                                <a className={s.text_card}>Прогноз: </a>
                                <a className={s.about_text}>9 сут</a>
                            </div>
                            <div className={s.scheme}>
                                <img src={require('./Scheme.png')}/>
                            </div>
                            <Collapse defaultActiveKey={['1']} onChange={onChange} size="small">
                                <Panel header="Все подшипники" key="1">
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№1 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№2 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№3 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№4 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№5 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№6 п-к</a><img src={require("./T.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№7 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№8 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>№9 п-к</a><img src={require("./T.png")}/><img src={require("./V.png")}/></div></Checkbox></Row>
                                    <Row><Checkbox onChange={onChange_checkbox}><div className={s.flex}><a>Уровень масла</a><img src={require("./L.png")}/></div></Checkbox></Row>
                                </Panel>
                            </Collapse>
                        </div>

                    </div>
                </div>

            </div>






        </div>
    );
}