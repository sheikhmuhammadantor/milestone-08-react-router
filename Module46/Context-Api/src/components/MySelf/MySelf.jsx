import Special from "../Special/Special";



// eslint-disable-next-line react/prop-types
const MySelf = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;