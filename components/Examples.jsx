import TabButton from '../TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../ComponentsList';

export default function Examples() {
    const [value, setValue] = useState("");

    function byClicking(selecteditem) {
        setValue(selecteditem)
    }
    return (
        <>
            <section id='examples'>
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={value === "components"} onSelect={() => { byClicking("components") }} title="Components" />
                    <TabButton isSelected={value === "jsx"} onSelect={() => { byClicking("jsx") }} title="JSX" />
                    <TabButton isSelected={value === "props"} onSelect={() => { byClicking("props") }} title="Props" />
                    <TabButton isSelected={value === "state"} onSelect={() => { byClicking("state") }} title="State" />
                </menu>
            </section>

            <section id='tab-content'>
                {!value && (<p>please select your text..</p>)}
                {value && (<div>
                    <h3>{EXAMPLES[value].title}</h3>
                    <p>{EXAMPLES[value].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[value].code}
                        </code>
                    </pre>
                </div>)}

            </section>
        </>
    );
}