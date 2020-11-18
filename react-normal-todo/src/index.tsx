import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import {createStore} from "redux"
import {rootReducer} from "./features/index"
import {Provider} from "react-redux"

//store은 상태를 저장하는 곳
//원래 redux 없이 react만 사용할 때에는 컴포넌트 자체에 state를 저장했었음.

const store = createStore(rootReducer)

//최상단에서 store 를 자체 provider로 주입하고, 그 안에서 App을 빌드(가상 돔에서)함.
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")

)