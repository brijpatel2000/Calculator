import React from 'react'

export default function Cube() {

    const [value, setValue] = React.useState("");
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const [btns, setBtns] = React.useState("");
    const [btns1, setBtns1] = React.useState("");

    console.log(+value, 'value', +value1, 'value1', +value2, "value2", btns, 'btns', btns1, 'btns1',);

    const func = (prop) => {
        let tempValue = value;
        if (value === value1) tempValue = "";
        let temp = ("" + tempValue).concat(prop)
        setValue(temp);
        if (!!btns) { setBtns("") };
    }


    const Remove = () => {
        setValue(value.slice(0, -1))
    }


    React.useEffect(() => {
        const btn = document.getElementsByClassName('orange');
        if (!!btns) {
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.remove("light_orange")
            }
            if (btns === "/") {
                btn[0].classList.add("light_orange")
            } else if (btns === "*") {
                btn[1].classList.add("light_orange")
            } else if (btns === "-") {
                btn[2].classList.add("light_orange")
            } else if (btns === "+") {
                btn[3].classList.add("light_orange")
            }
        } else {
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.remove("light_orange")
            }
        }
    }, [btns])


    React.useEffect(() => {
        let element = document.getElementById("number1")
        window.innerWidth > 700 && element.focus();
    }, [value])
    

    const calculation = (value2, btns, value1) => {
        let result = ''
        if (btns === '+' || btns1 === "+") {
            result = parseFloat(value2) + parseFloat(value1)
        } else if (btns === '-' || btns1 === "-") {
            result = parseFloat(value1) - parseFloat(value2)
        } else if (btns === '*' || btns1 === "*") {
            result = parseFloat(value2) * parseFloat(value1)
        } else if (btns === '/' || btns1 === "/") {
            result = parseFloat(value1) / parseFloat(value2)
        }
        setValue1(result);
        setValue(result);
        return result
    }


    // document.addEventListener('keypress', (event) => {
    //     var name = event.key;
    //      if (name === "/") {
    //         btns === "/" ? setBtns("") : setBtns("/");
    //         setValue1(value);
    //         setValue2("");
    //         setValue("")
    //     } else if (name === "*") {
    //         btns === "*" ? setBtns("") : setBtns("*");
    //         setValue1(value);
    //         setValue2("");
    //         setValue("")
    //     } else if (name === "-") {
    //         btns === "-" ? setBtns("") : setBtns("-");
    //         setValue1(value);
    //         setValue2("");
    //         setValue("")
    //     } else if (name === "+") {
    //         btns === "+" ? setBtns("") : setBtns("+");
    //         setValue1(value);
    //         setValue2("");
    //         setValue("")
    //     } else if (name === "Enter") {
    //         btns === "=" ? setBtns("") : setBtns("=");
    //         // let abc = calculation(value, btns, value1);
    //         let abc = calculation(2, btns, 1);
    //         setValue(abc)
    //         console.log(abc);
    //     }
    // });

    const calC = (sign) => {
        if (value) {
            btns === sign ? setBtns("") : setBtns(sign); setBtns1(sign);
            if (!btns) {
                setValue1(value);
                setValue("")
            }
            if (value1) {
                calculation(value, sign, value1);
            }
        }
    }



    return (
        <div className='main_div'>
            <input
                id="number1"
                type="text"
                onChange={(e) => {
                    const result = e.target.value.replace(/[^0-9/.]/gi, '');
                    setValue(result);
                }}
                value={value}
                onWheel={(e) => e.target.blur()}
                autoFocus
            />
            <div className="btns">
                <button
                    className='grey'
                    onClick={() => {
                        setValue("");
                        setValue1("");
                        setValue2("");
                        setBtns("");
                    }}
                >
                    {value ? "C" : "AC"}
                </button>
                <button className='grey' onClick={Remove}>&#60;</button>
                <button className='grey'
                    onClick={() => {
                        setValue(value/100)
                    }}
                >
                    %
                </button>
                <button
                    className='orange'
                    onClick={() => {
                       calC("/")
                    }}
                >
                    &#247;
                </button>
                <button className='black' onClick={() => func(7)}>7</button>
                <button className='black' onClick={() => func(8)}>8</button>
                <button className='black' onClick={() => func(9)}>9</button>
                <button
                    className='multi orange'
                    onClick={() => {
                       calC("*")
                    }}
                >
                    +
                </button>
                <button className='black' onClick={() => func(4)}>4</button>
                <button className='black' onClick={() => func(5)}>5</button>
                <button className='black' onClick={() => func(6)}>6</button>
                <button
                    className='orange'
                    onClick={() => {
                        calC("-");
                    }}
                >
                    -
                </button>
                <button className='black' onClick={() => func(1)}>1</button>
                <button className='black' onClick={() => func(2)}>2</button>
                <button className='black' onClick={() => func(3)}>3</button>
                <button
                    className='orange'
                    onClick={() => {
                        calC("+");
                    }}
                >
                    +
                </button>
                <button className='zero black left' onClick={() => func(0)}>0</button>
                <button className='black' onClick={() => func(".")}>.</button>
                <button className='orange org'
                    onClick={() => {
                        calculation(value, btns, value1)
                    }}
                >
                    =
                </button>
            </div>
        </div>
    )
}
