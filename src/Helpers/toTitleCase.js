
export const toTitleCase = ( str ) => {
   return str.split("-").map( s => s.charAt( 0 ).toUpperCase() + s.substring(1).toLowerCase() ).join( " " );
}
