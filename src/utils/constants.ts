const size = {
    mobileBreakpoint: '374px',
    tabletBreakpoint: '768px',
    desktopBreakpoint: '1100px',
    largeDesktopBreakpoint: '1366px',
};

export const device = {
    mobileBreakpoint: `(min-width: ${size.mobileBreakpoint})`,
    tabletBreakpoint: `(min-width: ${size.tabletBreakpoint})`,
    desktopBreakpoint: `(min-width: ${size.desktopBreakpoint})`,
    largeDesktopBreakpoint: `(min-width: ${size.largeDesktopBreakpoint})`,
};

export const emialRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const pageVariants = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '-100vw',
    },
};

export const pageTransition = {
    type: 'tween',
    ease: 'circOut',
    duration: 0.7,
};
export const pageProps = {
    initial: 'out',
    animate: 'in',
    exit: 'out',
};
