function FormRow({type, name, value, handleChange, labelText}) {
  return (
    <div className="form-row">
          <label htmlFor={type} className="form-label">
            {name}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="form-input"
          />
        </div>
  )
}

export default FormRow