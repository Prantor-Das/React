import { useState } from "react";

function Practice() {
    return (
        <div>
            <h1>Light Bulb Practice</h1>
            <LightBulb />
        </div>
    )

    function LightBulb() {
        const [bulbOn, setBulbOn] = useState(true);

        return (
            <div>
                <BulbState bulbOn={bulbOn} />
                <ToggleBulbStore bulbOn={bulbOn} setBulbOn={setBulbOn} />
            </div>
        );
    }

    function BulbState({ bulbOn }) {
        return (
            <div>
                {/* Conditional rendering */}
                {bulbOn ? "Bulb is on" : "Bulb is off"}
            </div>
        );
    }

    function ToggleBulbStore({ bulbOn, setBulbOn }) {

        function toggle() {
            // One way if we do not pass the current state as a parameter(bulbOn)
            // setBulbOn(currentState => !currentState);
            setBulbOn(!bulbOn);
        }

        return (
            <div>
                <button onClick={toggle}>Toggle the Bulb</button>
            </div>
        );
    }
}

export default Practice