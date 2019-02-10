/**
 * Extract specific properties of object in new object.
 *
 * Typed that:
 * - keys to extract have to exist in obj
 * - returned obj has right types for extracted obj
 * 
 * @param obj   Object to extract from
 * @param props Properties to extract.
 * @returns     Object with extracted properties.
 */
const pick = (obj, ...props) =>
    props.reduce((state, prop) => (state[prop]=obj[prop], state), {});

module.exports = {
    pick
};