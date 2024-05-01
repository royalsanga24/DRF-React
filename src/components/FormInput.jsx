import "../App.css";

export const FormInput = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    <div>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
    </div>
}