import Brother from "../Borther/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


// eslint-disable-next-line react/prop-types
const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;