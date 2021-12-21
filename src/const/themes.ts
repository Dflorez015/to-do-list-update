/**
 * Buttons
 */
 export const otherButton = { color: "var(--orange-1)", colorHover: "var(--orange-2)", textC: "#fff" }
 export const cancelButton = { color: "var(--red-1)", colorHover: "var(--red-2)", textC: "#fff" }
 export const sendButton = { color: "var(--blue-2)", colorHover: "var(--blue-1)", textC: "#fff" }
 
 /**
  * Flex
  */
 export const rowCommon = { direction: "row", gap: "2rem", width: "100%", justifyC: "center", align: "center" }
 export const columnCommon = { direction: "column", gap: "2rem", width: "100%", justifyC: "center", align: "center" }
 
 /**
  * H1
  */
 export const h1Center = { direction: "center" }
 export const h1Left = { direction: "left" }
 
 /**
  * Form
  */
export const rowCommonForm = { ...rowCommon , justifyC: "left" }

/**
 * tables
 */
export const tbodyCommon = {...columnCommon, gap: "0px", mheight: "60vh"}