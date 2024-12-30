import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        PROFESSIONAL: { backgroundColor: "	#00ff83" },
        PERSONAL: { backgroundColor: "#ff8b94" },
        HOUSEHOLD: { backgroundColor: "rgb(244, 129, 42)" },
        FITNESS: { backgroundColor: "#4cdafc" },
        HOBBIES: { backgroundColor: "#e86af0" },
        STUDY: { backgroundColor: "#fffb96" },
        default: { backgroundColor: "#f9f9f9" },
    }
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;




// import React  from "react";

// import "./Tag.css";

// const Tag = ({tagName, selectTag, selected }) => {
//     const tagStyle = {
//         PROFESSIONAL: { backgroundColor: "#fda821" },
//         PERSONAL: { backgroundColor: "#15d4c8" },
//         HOUSEHOLD: { backgroundColor: "#ffd12c" },
//         FITNESS: { backgroundColor: "#4cdafc" },
//         HOBBIES: { backgroundColor: "#21fda8" },
//         STUDY : { backgroundColor: "#e3fd21" },
//         default: { backgroundColor: "#f9f9f9" },
//     };
//     return (
//         <button
//             type='button'
//             className='tag'
//             style={selected ? tagStyle[tagName] : tagStyle.default}
//             onClick={() => selectTag(tagName)}>
//             {tagName}
//         </button>
//     );
// };

// export default Tag;