import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const param = useParams();

    return (
        <>
            <h1>The ProductDetails page.</h1>
            {param.productId}
        </>
    );
}

export default ProductDetails;