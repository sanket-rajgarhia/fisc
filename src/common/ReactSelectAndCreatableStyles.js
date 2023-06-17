export const customStylesForSelectAndCreatable = {
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        fontFamily: 'Source Sans Pro',
        fontSize: "0.8rem",
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        boxShadow: "none",
        fontFamily: 'Source Sans Pro',
        fontSize: "0.8rem",
        minWidth: "180px",
    }),
    singleValue: (defaultStyles) => ({...defaultStyles}),
};