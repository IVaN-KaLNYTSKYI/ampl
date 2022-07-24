import {
    Navobject,
    B2BActive,
    B2BNoactive, B2CNoactive, B2CActive
} from "../ui-components";
import {useState} from "react";
import TableB2B from "./TableB2B/TableB2B";
import TableB2C from "./TableB2C/TableB2C";

function B2B() {
    let [flag, setFlag] = useState(false);
    function flagActive(flag) {
        setFlag(flag)
    }
    return (
        <div >
            <Navobject width={"100%"}/>
            {!flag && <B2BActive/>}
            { flag && <B2BNoactive flagActive={flagActive}/>}
            {!flag && <B2CNoactive flagActive={flagActive}/>}
            {flag && <B2CActive/>}
            {!flag&&<TableB2B ms={'b2b'}/>}
            {flag&&<TableB2C ms={'b2c'}/>}
        </div>
    );
}

export default B2B;
