import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Cascader, Input, Menu, Icon } from "antd";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../app.css";
import moment from "moment";

import Home from "./personali";
import Stuff from "./professionali";

const { SubMenu } = Menu;

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row">
                    <div className="col-3">
                        <Menu
                            defaultOpenKeys={["sub1"]}
                            mode="inline"
                            theme="light"
                        >
                            <Menu.Item key="1">
                                <NavLink to="/">
                                    <Icon type="pie-chart" />
                                    <span>Dati Personali</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/stuff">
                                    <Icon type="desktop" />
                                    <span>Dati Professionali</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="col-9">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/stuff" component={Stuff} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
