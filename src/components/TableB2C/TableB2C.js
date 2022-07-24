import './TableB2C.css'
import {useState} from "react";
import {
    Interactbutton
} from "../../ui-components";

function B2B(props) {
    let [flag, setFlag] = useState(false);
    console.log(props.ms)

    let data = ['okasatkinwk@gmail.com', 'alexpochtov@gmail.com', 'kitkathrin@gmail.com']
    return (
        <div style={{display: 'flex'}}>
            <div className={"b2c-table"} style={{borderRadius: '6px 0px 0px 6px'}}>
                <div className={'line'}>
                    <span>E-Mail</span>
                </div>
                <div className={"main-b2c"}>
                    {
                        data.map((value, index) => {
                            return (<div onClick={() => alert(index)} className={'main-text-b2c'} key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2c-table-1"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line'}>
                    <span>Company name</span>
                </div>
                <div className={"main-b2c"}>
                    {
                        data.map((value, index) => {
                            return (<div className={'main-text-b2c'}
                                         key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2c-table-2"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line'}>
                    <span>Test Amount</span>
                </div>
                <div className={"main-b2c"}>
                    {
                        data.map((value, index) => {
                            return (<div className={'main-text-b2c'} key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2c-table-3"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line'}>
                    <span>Secret Key</span>
                </div>
                <div className={"main-b2c"}>
                    {
                        data.map((value, index) => {
                            return (<div className={'main-text-b2c'} key={index}>
                                {value}
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className={"b2c-table-5"} style={{borderRadius: '0px 0px 0px 0px'}}>
                <div className={'line-1'}>

                </div>
                <div style={{marginLeft:"5px"}} className={"main-b2c"}>
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
