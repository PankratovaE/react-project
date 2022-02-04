import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, setErrorStatus, setIdleStatus } from '../Store/Action/compAPI';
import '../App.css';


const CompAPI = () => {
   
    const dispatch = useDispatch()

    const [ pageData, setPageData ] = useState([])
    // const [ isError, setIsError ] = useState(false)
    
    const getData = () => {
        dispatch(fetchData())
        setPageData(list)
        //    if (status === 'error') {
        //     setIsError(true);
        //     console.log(isError)
        // }
    }

    const clearData = () => {
        setPageData([])
    }

    const repeateGetData = () => {
        dispatch(setIdleStatus())
        dispatch(fetchData())
    }

    const { list, status } = useSelector(state => state.testAPI)

    return (
        <div className="App-header">
            <div>
                <div >
                    <div className="API__btn-block">
                        <button onClick={ getData } className="form__button margin_btn">GET DATA</button>
                        <button onClick={ clearData } className="form__button margin_btn">CLEAR DATA</button>
                    </div>
                    
                    <div className="API__loading">{status === 'loading' ? <div>Loading...</div> : null}</div>

                    <div className="API__loading">
                        { status === 'error' ? <div>
                        <button onClick={ repeateGetData } className="form__button">ONE MORE TIME</button></div> : null}
                    </div>
                </div>
                <div className="testAPI__block">
                    {pageData.map((item, index) => (<div className="testAPI__item" key={index}>{ item.string }</div>))}
                </div>
            </div>
        </div>
    )
}

export default CompAPI;