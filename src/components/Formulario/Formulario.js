import Button from "./Button/Button";
import Input from "./Input/Input";

export default function Formulario () {
    return (
        <form style={{display: `flex`, flexDirection:`column`}}>
            <Input />
            <Input />
            <Input />

            <Button />
        </form>
    );
}