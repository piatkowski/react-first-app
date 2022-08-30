import {Button,} from "react-bootstrap";
import QuantityInput from "../UI/QuantityInput";

const MailItemForm = props => {
    return (
        <form>
            <QuantityInput input={{
                min: 1,
                max: 5,
                step: 1
            }} />
            <Button variant="primary">Add to Cart</Button>
        </form>
    )
};

export default MailItemForm;