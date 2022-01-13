import React from 'react';
import Button from "./button";
import {decrement, increment} from "../reducer/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const ButtonsWithCounter = (props) => {
    const login = () => {
        dispatch(increment());
    }

    const loginGoogle = () => {
        dispatch(decrement());
    }
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div className={'buttonsWrapper'}>
            <div>
                <Button
                    name={props.nameLogin}
                    color={'red'}
                    onClick={login}
                />
            </div>
            <span>Count: {count}</span>
            <div>
                <Button
                    name={props.nameLoginWithGoogle}
                    color={'blue'}
                    onClick={loginGoogle}
                />
            </div>
        </div>
    );
}

export default ButtonsWithCounter;

ButtonsWithCounter.defaultProps = {
    nameLogin: 'Увійти',
    nameLoginWithGoogle: 'Увійти через Google'
};