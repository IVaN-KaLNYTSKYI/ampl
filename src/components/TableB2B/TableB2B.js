import './TableB2B.css'
import {useState} from "react";
import {
    Interactbutton
} from "../../ui-components";

function B2B(props) {
    let [flag, setFlag] = useState(false);
    console.log(props.ms)

    let data = ['okasatkinwk@gmail.com', 'alexpochtov@gmail.com', 'kitkathrin@gmail.com','okasatkinwk@gmail.com','okasatkinwk@gmail.com','okasatkinwk@gmail.com']
    let data1=['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmRyaWlib2ZkZnJlZmRmZGdkZndzc0BnbWFpbC5jb20iLCJjb21wYW55IjoiRGlnaXRhbGl6YWZkZnRmZGZkZ2Z3cm4iLCJpYXQiOjE2NDY5MjgwODUsImV4cCI6MTY0OTUyMDA4NX0.ATendmboXw-8KUdUG529XdnMW69nAsENU0dykwo1p6o','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmRyaWlib2ZkZnJlZmRmZGdkZndzc0BnbWFpbC5jb20iLCJjb21wYW55IjoiRGlnaXRhbGl6YWZkZnRmZGZkZ2Z3cm4iLCJpYXQiOjE2NDY5MjgwODUsImV4cCI6MTY0OTUyMDA4NX0.ATendmboXw-8KUdUG529XdnMW69nAsENU0dykwo1p6o']
    return (
        <div style={{display: 'flex'}}>
            <div className={"b2b-table"} style={{borderRadius: '6px 0px 0px 6px'}}>
                <div className={'line'}>
                    <span>E-Mail</span>
                </div>
                <div className={"main"}>
                    {
                        data.map((value, index) => {
                            return (<div onClick={() => alert(index)} className={'main-text'} key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2b-table-1"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line'}>
                    <span>Company name</span>
                </div>
                <div className={"main"}>
                    {
                        data.map((value, index) => {
                            return (<div className={'main-text'}
                           key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2b-table-2"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line'}>
                    <span>Test Amount</span>
                </div>
                <div className={"main"}>
                    {
                        data.map((value, index) => {
                            return (<div className={'main-text'} key={index}>
                                {index}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2b-table-3"} style={{borderRadius: '0px 6px 6px 0px'}}>
                <div className={'line'}>
                    <span>Secret Key</span>
                </div>
                <div className={"main"}>
                    {
                        data1.map((value, index) => {
                            return (<div className={'main-text-secret-key'} key={index}>
                                {value.slice(0,50)}...
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2b-table-5"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line-1'}>

                </div>
                <div style={{marginLeft:"5px"}} className={"main"}>
                    {
                        data.map((value, index) => {
                            return (<div style={{
                                padding: "10px"
                            }} key={index}>
                                <Interactbutton id={index}/>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default B2B;
