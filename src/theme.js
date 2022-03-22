const breakpoint = "900px";

const defaultLayout = {
    backgroundColor: "#efefef",
    headerBackgroundColor: "#ffffff",
    headerFontFamily: "Roboto",
    headerFontSize: {
        mobile: "2.4rem",
        desktop: "3.2rem",
    },
    headerFontWeight: "300",
    headerHeight: {
        mobile: "4rem",
        desktop: "6rem",
    },
    headerTextColor: "#323232",
    panelBackgroundColor: "#ffffff",
    panelBorderRadius: ".8rem",
    panelBoxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    panelDesktopHeight: "60rem",
    panelDesktopMaxWidth: "90rem",
    panelDesktopMaxHeight: "60rem",
    panelDesktopMinHeight: "40rem",
    panelMargin: {
        mobile: {
            left: ".8rem",
            right: ".8rem",
            top: ".8rem",
            bottom: ".8rem",
        },
        desktop: {
            left: "auto",
            right: "auto",
            top: "2rem",
            bottom: "2rem",
        },
    },
};

export { breakpoint, defaultLayout };
