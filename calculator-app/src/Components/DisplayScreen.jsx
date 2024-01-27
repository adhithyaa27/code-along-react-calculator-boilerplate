import React, { useState } from "react";
import Button from "./Button";
import './../App.css'

function DisplayScreen() {
    const [Btnvalue, setBtnValue] = useState("");
    const [result, setResult] = useState(0);

    function takeInput(value) {
        setBtnValue((prev) => prev + value);
    }

    function handleDelete() {
        setBtnValue((prev) => prev.slice(0, -1));
    }

    function handleClear() {
        setBtnValue("");
        setResult("")
    }

    function calculate() {
        try {
            setResult(eval(Btnvalue))
        } catch (error) {
            setResult("ERROR")
        }
    }

    return (
        <>

            <div className="root">
                <div className="parent">
                    <input
                        type="text"
                        value={Btnvalue.toString()}
                        readOnly
                    />
                    <input type="text" placeholder="0" value={result} readOnly />
                </div>
                <div className="buttonss">
                    <Button value={"1"} onClick={() => takeInput("1")} />
                    <Button value={"2"} onClick={() => takeInput("2")} />
                    <Button value={"3"} onClick={() => takeInput("3")} />
                    <Button value={"4"} onClick={() => takeInput("4")} />

                    <Button value={"5"} onClick={() => takeInput("5")} />
                    <Button value={"6"} onClick={() => takeInput("6")} />
                    <Button value={"7"} onClick={() => takeInput("7")} />
                    <Button value={"8"} onClick={() => takeInput("8")} />

                    <Button value={"9"} onClick={() => takeInput("9")} />
                    <Button value={"+"} onClick={() => takeInput("+")} />
                    <Button value={"0"} onClick={() => takeInput("0")} />
                    <Button value={"-"} onClick={() => takeInput("-")} />

                    <Button value={"/"} onClick={() => takeInput("/")} />
                    <Button value={"."} onClick={() => takeInput(".")} />
                    <Button value={"*"} onClick={() => takeInput("*")} />
                    <Button value={"%"} onClick={() => takeInput("%")} />

                    <Button value={"="} onClick={calculate} />
                    <Button value={"DEL"} onClick={handleDelete} />
                    </div>

                    <Button id="AC" value={"AC"} onClick={handleClear} />


            </div>
        </>
    );
}

export default DisplayScreen;
