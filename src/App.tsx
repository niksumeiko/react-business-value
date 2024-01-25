/* eslint-disable @typescript-eslint/no-magic-numbers */
export const App = () => {
    const input = Math.floor(Math.random() * 20) - 10;

    return (
        <div>
            <p>Input: {input}</p>
            <p>Fruit: ___</p>
        </div>
    );
};

// Exercise: Understanding Business Value
// Display fruits as per table below depending on the input.
// However, when the input is an odd number, always return 🥭 (mango).
//
// | Input           | Output |
// |-----------------|--------|
// | Positive number | 🍎     |
// | Negative number | 🍌     |
// | 0               | 🥝     |
