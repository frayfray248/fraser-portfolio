const screenSizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}



export const device = {
    min: {
        mobileS: `(min-width: ${screenSizes.mobileS})`,
        mobileM: `(min-width: ${screenSizes.mobileM})`,
        mobileL: `(min-width: ${screenSizes.mobileL})`,
        tablet: `(min-width: ${screenSizes.tablet})`,
        laptop: `(min-width: ${screenSizes.laptop})`,
        laptopL: `(min-width: ${screenSizes.laptopL})`,
        desktop: `(min-width: ${screenSizes.desktop})`,
        desktopL: `(min-width: ${screenSizes.desktop})`
    },
    max: {
        mobileS: `(max-width: ${screenSizes.mobileS})`,
        mobileM: `(max-width: ${screenSizes.mobileM})`,
        mobileL: `(max-width: ${screenSizes.mobileL})`,
        tablet: `(max-width: ${screenSizes.tablet})`,
        laptop: `(max-width: ${screenSizes.laptop})`,
        laptopL: `(max-width: ${screenSizes.laptopL})`,
        desktop: `(max-width: ${screenSizes.desktop})`,
        desktopL: `(max-width: ${screenSizes.desktop})`
    }
}
