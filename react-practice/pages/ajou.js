const AjouPage = ({
    test,
}) => {
    return (
        <div>
            <h1>Ajou university! {test}</h1>
            <h2>Hello!</h2>
        </div>
    );
};

// arrow function
function max(a, b){
    return a > b ? a : b;
}

const max = (a, b) => {
    return a > b ? a : b;
};

export default AjouPage;