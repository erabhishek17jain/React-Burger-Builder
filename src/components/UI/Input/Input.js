import React from 'react'
import'./Input.css'

const input = (props) => {
    let inputElement = null;
    const inputClasses =  ['inputElement'];
    let validationMsg = '';
    if(props.inValid && props.shouldValidate && props.touched){
        inputClasses.push('invalid');
        validationMsg = <p className="validationMsg">Please enter a valid {props.valueType}</p>
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} value ={props.value}
            onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} value ={props.value}
            onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (
            <select style={{width: "100%"}}
                className={inputClasses.join(' ')} 
                value ={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            );
            break;
        default:
            inputElement = <input 
            className = {inputClasses.join(' ')} 
            {...props.elementConfig} value ={props.value}
            onChange={props.changed}/>
    }
    return (
        <div className="input">
            <label className="labels"></label>
            {inputElement}
            {validationMsg}
        </div>
    )

}

export default input