import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'



export const Input = ({
  label, name, value, placeholder, type, onChange, required, minLength, error, wrapperClass, inputClass, labelClass
}) => {
  return (

    <div className={wrapperClass}>
      { (label && type !== "file")? <label htmlFor={name} className={labelClass}>{label}</label> : null}      
      <input type={type}
        name={name}
        className={classnames(`form-control ${inputClass}`, {
          'is-invalid': error
        })}
        onChange={onChange}
        value={value}
        id={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
      />
      { (label && type === "file")? <label htmlFor={name} className={labelClass}>{label}</label> : null}
      {error? <small className="invalid-feedback px-1 bg-light">{error}</small> : ''}
      
    </div>
  )
}

export const TextArea = ({
  label, name, value, placeholder, onChange, required, minLength, error, wrapperClass, inputClass, labelClass, cols, rows
}) => {
  return (

    <div className={wrapperClass}>
      { label? <label htmlFor={name} className={labelClass}>{label}</label> : null}  
          
      <textarea
        name={name}
        className={classnames(`form-control ${inputClass}`, {
          'is-invalid': error
        })}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
        required={required}
        value = {value}
        minLength={minLength}
        rows = {rows}
        cols = {cols}
      ></textarea>   
      {error? <small className="invalid-feedback px-1 bg-light">{error}</small> : ''}   
    </div>
  )
}

// export const DateInput = ({
//   days, months, years, onChange, state, dateName, label,
// }) => {
//   return (

//     <div className="row m-0">

//       { dateName?
//         <Input wrapperClass="col-3 p-0" type="button" inputClass="form-control-sm brr-0"  value={label? label : "Date"} id=""  name="" onChange= {onChange} /> : null }

//       <Select name="day" id="day" onChange={ onChange } value={ state.day } wrapperClass="col-3 p-0" selectClass="form-control-sm br-0" defaultValue="Day" options={days} />

//       <Select name="month" id="month" onChange={ onChange } value={ state.month } wrapperClass="col-3 p-0" selectClass="form-control-sm br-0" defaultValue="Month" options={months} />

//       <Select name="year" id="year" onChange={ onChange } value={ state.year } wrapperClass="col-3 p-0" selectClass="form-control-sm brl-0" defaultValue="Year" options={years} />

//     </div>

//   )
// }

export const Select = ({
  label, name, selectedValue, onChange, required, error, wrapperClass, selectClass, defaultValue, options, children
}) => {
  return (
    
    <div className={ wrapperClass }>
      { label? <label htmlFor={name}>{label}</label> : null}
      <select 
        name={name}
        className={classnames(`form-control ${selectClass}`, {
          'is-invalid': error
        })}
        onChange={onChange}
        value={selectedValue}
        id={name}
        required={required}
      >
        <option defaultValue hidden >{ defaultValue }</option>
        { options !== null? 
          options.map((option, key) => <option key={key} value={option.phone} className="text-capitalize">{option}</option>):
          children
        }
      </select>
      {error? <small className="invalid-feedback px-1 bg-light">{error}</small> : ''}
    </div>
  )
}

export const SelectObject = ({
  label, id, name, selectedValue, onChange, required, error, wrapperClass, selectClass, defaultValue, options
}) => {
  return (
    
    <div className={ wrapperClass }>
      { label? <label htmlFor="name">{label}</label> : null}
      <select 
        name={name}
        className={classnames(`form-control ${selectClass}`, {
          'is-invalid': error
        })}
        onChange={onChange}
        value={selectedValue}
        id={id}
        required={required}
      >
        <option defaultValue value hidden >{ defaultValue }</option>
        { options.map((option, key) => <option key={key} value={option.charAt(0)} className="text-capitalize">{option}</option>) }
      </select>
      {error? <small className="invalid-feedback px-1 bg-light">{error}</small> : ''}
    </div>
  )
}


Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  minLength: PropTypes.number,
  required: PropTypes.bool

}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  minLength: PropTypes.number,
  required: PropTypes.bool

}

Input.defaultProps = {
  type: 'text',
  placeholder: null,
  minLength: null,
  required: false,
  wrapperClass: "form-group",
  label: null,
  labelClass: ""
}

TextArea.defaultProps = {
  placeholder: null,
  minLength: null,
  required: false,
  wrapperClass: "form-group",
  label: null,
  labelClass: "",
}


// DateInput.propTypes = {
//   days: PropTypes.array.isRequired,
//   months: PropTypes.array.isRequired,
//   years: PropTypes.array.isRequired,
//   onChange: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
// }

// DateInput.defaultProps = {
//   days,
//   months,
//   years: years(),
//   dateName: null,
//   onChange: ()=>{},
  
// }

Select.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  selectedValue: PropTypes.any,
}

Select.defaultProps = {
  required: false,
  wrapperClass: "form-group",
  label: null,
}

