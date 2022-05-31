import React from "react";

export default function Button({ text, click, styles }) {
    return (
        <button className={styles} onClick={click} data-testid='buttonComponent'>
            {text}
        </button>
    )
}