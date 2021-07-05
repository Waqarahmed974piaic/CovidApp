import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Card = () => {
    let state = useSelector(state => state)
    const [isloaded, setLoaded] = useState(false)
    let dispatch = useDispatch();
    const updateData = () => {
        axios.get(`https://api.covidtracking.com/v1/states/current.json`)
            .then(res => {
                const resData = res.data;
                dispatch({ type: "UPDATEDATA", covidData: resData })
                setLoaded(true)
            })
    }
    useEffect(updateData, [isloaded]);

    return (
        <>
            {state.covidData.map((e, i) => {
                return (
                    <div className="card text-dark bg-warning my-3 mx-3" style={{ Width: "12rem", display: "inline-block" }}>
                        <h5 className="card-header">Covid19 Stats</h5>
                        <div className="card-body">
                            <h6 className="card-title"><strong>State:</strong>{e.state}</h6>
                            <ul style={{ listStyle: "none" }}>
                                <li key={i} style={{ alignContent: "center" }}><strong>Deaths:</strong>{e.death}</li>
                                <li key={i}><strong>Positve Cases</strong>:{e.positive}</li>
                                <li key={i}><strong>Total Test Results:</strong>{e.totalTestResults == null ? "0" : e.totalTest}</li>
                                <li key={i}><strong>Hospitalized:</strong>{e.hospitalizedCurrently == null ? "0" : e.hospitalizedCurrently}</li>
                                <li key={i}><strong>Positve Test Viral:</strong>{e.positiveTestsViral == null ? "0" : e.positiveTestsViral}</li>
                                <li key={i}><strong>Negative Test Viral:</strong>{e.negativeTestsViral == null ? "0" : e.negativeTestsViral}</li>
                                <li key={i}><strong>Total Test Viral:</strong>{e.totalTestsViral == null ? "0" : e.totalTestsViral}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
export default Card